<template>
  <div>
    <div class="main-container">

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$transition-time: 0.35s;

.main-container {
  min-height: 100%;
  transition: margin-left $transition-time;
  margin-left: var(--v3-sidebar-width);
  position: relative;
}
</style>