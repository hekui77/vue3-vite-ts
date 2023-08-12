<template>
  <div>
    login
    <el-button type="primary" @click='handleClick'>counter++</el-button>
    {{ store.count }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/modules/counter';

const store = useStore();

const handleClick = () => {
  store.countAdd();
};


</script>

<style scoped>

</style>