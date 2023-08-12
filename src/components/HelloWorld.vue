<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

</script>

<template>
  <h1>{{ msg }}</h1>
  <el-icon><FullScreen /></el-icon>
  <div class="card">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
