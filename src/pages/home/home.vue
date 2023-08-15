<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/modules/user';

const count = ref(0);

const onLogout = () => {
  useUserStore().logout().then(() => {
    router.push('/login');
  });
};


</script>

<template>
  <div class="app-container">
    <p>token: {{ useUserStore().token }}</p>
    <div class="card">
      <el-button type="primary" @click="count++">count is {{ count }}</el-button>
    </div>
    <router-link to="/userManage/userInfo">userInfo</router-link>
    <el-button type="primary" @click="onLogout">退出登录</el-button>
  </div>
</template>

<style scoped></style>
