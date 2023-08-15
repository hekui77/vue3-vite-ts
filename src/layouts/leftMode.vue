<template>
  <div>
    <div class="main-container">
      <!-- 头部导航栏 -->
      <div class="layout-header">
        <navigationBar />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import navigationBar from './components/navigationBar.vue';

</script>

<style scoped lang="scss">
$transition-time: 0.35s;

.main-container {
  min-height: 100%;
  transition: margin-left $transition-time;
  margin-left: var(--v3-sidebar-width);
  position: relative;
}
.layout-header {
  box-shadow: var(--el-box-shadow-lighter);
}
</style>