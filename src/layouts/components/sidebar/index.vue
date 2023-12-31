<script lang="ts" setup>
import { computed } from 'vue';
import logo from '../logo.vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/modules/app';
import sidebarItem from './sidebarItem.vue';
import { routes } from '@/router';
import { useRoute } from 'vue-router';
import { getCssVariableValue } from '@/utils';

const v3SidebarMenuBgColor = getCssVariableValue('--v3-sidebar-menu-bg-color');
const v3SidebarMenuTextColor = getCssVariableValue('--v3-sidebar-menu-text-color');
const v3SidebarMenuActiveTextColor = getCssVariableValue('--v3-sidebar-menu-active-text-color');

const appStore = useAppStore();
const { sidebar } = storeToRefs(appStore);
const route = useRoute();

const isCollapse = computed(() => !sidebar.value.opened);


const activeMenu = computed(() => {
  const {
    meta: { activeMenu },
    path
  } = route;
  return activeMenu ? activeMenu : path;
});


</script>

<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :default-active="activeMenu"
        :background-color="v3SidebarMenuBgColor"
        :text-color="v3SidebarMenuTextColor"
        :active-text-color="v3SidebarMenuActiveTextColor">
        <sidebarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="isCollapse" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

.has-logo {
  .el-scrollbar {
    // 多 1% 是为了在左侧模式时侧边栏最底部不显示 1px 左右的白色线条
    height: calc(101% - var(--v3-header-height));
  }
}

.el-scrollbar {
  // 多 5% 是为了在顶部模式时不显示垂直滚动条
  height: 105%;

  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;

    .el-scrollbar__view {
      height: 100%;
    }
  }

  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  border: none;
  min-height: 100%;
  width: 100% !important;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu .el-menu-item),

:deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
  }
}

.el-menu--collapse {
  :deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        @include tip-line;
      }
    }
  }
}
</style>
