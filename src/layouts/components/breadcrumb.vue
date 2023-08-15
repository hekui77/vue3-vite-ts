<script lang="ts" setup>
import { type RouteLocationMatched, useRoute, useRouter } from 'vue-router';

/** 处理面包屑导航点击事件 */
const handleLink = (() => {

});
</script>

<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item>
      <span class="no-redirect">
        首页
      </span>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <a @click.prevent="handleLink()">
        二级页面
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: var(--v3-navigationbar-height);
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
