<template>
  <div class="login-container">
    <p class="title">登录系统</p>
    <el-form :model="form">
      <el-form-item>
        <el-input :prefix-icon="User" v-model="form.userName" />
      </el-form-item>
      <el-form-item>
        <el-input :prefix-icon="Lock" type="password" v-model="form.passWord" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';

interface formType {
  userName: string,
  passWord: string
}

const form = reactive<formType>({
  userName: '',
  passWord: ''
});

const onSubmit = () => {

};

</script>

<style scoped>
.login-container{
  width: 420px;
  margin: 0 auto;
  padding-top: 200px;
  .title{
    font-size: 22px;
    text-align: center;
  }
}
</style>