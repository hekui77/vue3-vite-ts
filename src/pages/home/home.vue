<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);


</script>

<template>
  <el-icon><FullScreen /></el-icon>
  <div class="card">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
  </div>
  <router-link to="/userManage/userInfo">userInfo</router-link>
</template>

<style scoped>
</style>
