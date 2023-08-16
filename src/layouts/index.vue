<template>
  <div>
    <leftMode />
  </div>
</template>

<script setup lang="ts">
import leftMode from './leftMode.vue';
import useResize from './hooks/useResize';


/** Layout 布局响应式 */
useResize();
</script>

<style scoped>

</style>