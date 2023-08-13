<script setup lang="ts">
import router from '@/router';
import { removeToken } from '@/utils/cookies';
import { ref } from 'vue';

const count = ref(0);

const onLogout = () => {
  removeToken();
  router.push('/login');
};


</script>

<template>
  <el-icon>
    <FullScreen />
  </el-icon>
  <div class="card">
    <el-button type="primary" @click="count++">count is {{ count }}</el-button>
  </div>
  <router-link to="/userManage/userInfo">userInfo</router-link>
  <el-button type="primary" @click="onLogout">退出登录</el-button>
</template>

<style scoped></style>
