<script lang="ts" setup>
import { computed } from 'vue';
import { type RouteRecordRaw } from 'vue-router';
import path from 'path-browserify';
import { isExternal } from '@/utils/validate';
import sidebarItemLink from './sidebarItemLink.vue';


interface Props {
  item: RouteRecordRaw
  isCollapse?: boolean
  basePath?: string
  isFirstLevel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isCollapse: false,
  isFirstLevel: true,
  basePath: ''
});

/** 显示的子菜单 */
const showingChildren = computed(() => {
  return props.item.children?.filter((child) => !child.meta?.hidden) ?? [];
});
/** 显示的子菜单数量 */
const showingChildNumber = computed(() => {
  return showingChildren.value.length;
});
/** 唯一的子菜单项 */
const theOnlyOneChild = computed(() => {
  const number = showingChildNumber.value;
  switch (true) {
  case number > 1:
    return null;
  case number === 1:
    return showingChildren.value[0];
  default:
    return { ...props.item, path: '' };
  }
});

/** 解析路径 */
const resolvePath = (routePath: string) => {
  switch (true) {
  case isExternal(routePath):
    return routePath;
  case isExternal(props.basePath):
    return props.basePath;
  default:
    return path.resolve(props.basePath, routePath);
  }
};


</script>

<template>
  <div v-if="!props.item.meta?.hidden" :class="{ 'simple-mode': props.isCollapse, 'first-level': props.isFirstLevel }">
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <sidebarItemLink v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <SvgIcon v-if="theOnlyOneChild.meta.svgIcon" :name="theOnlyOneChild.meta.svgIcon" />
          <template v-if="theOnlyOneChild.meta?.title" #title>
            {{ theOnlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </sidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(props.item.path)">
      <template #title>
        <SvgIcon v-if="props.item.meta?.svgIcon" :name="props.item.meta.svgIcon" />
        <span>{{ props.item.meta?.title  }}</span>
      </template>
      <template v-if="props.item.children">
        <sidebarItem v-for="child in props.item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" />
      </template>
    </el-sub-menu>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  min-width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.el-icon {
  width: 1em;
  margin-right: 12px;
  font-size: 18px;
}

.simple-mode {
  &.first-level {
    :deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
      span {
        visibility: hidden;
      }
    }
  }
}
</style>

