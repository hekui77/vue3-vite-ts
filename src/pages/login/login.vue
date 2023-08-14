<template>
  <div class="login-container">
    <p class="title">登录系统</p>
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item prop="userName">
        <el-input size="large" :prefix-icon="User" v-model="form.userName" />
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input size="large" :prefix-icon="Lock" type="password" v-model="form.passWord" />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" size="large" style="width: 100%;" type="primary" @click="onSubmit(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';
import router from '@/router';
import { useUserStore } from '@/stores/modules/user';

interface formType {
  userName: string,
  passWord: string
}


const formRef = ref<FormInstance>();
const form = reactive<formType>({
  userName: 'admin',
  passWord: 'admin'
});
const rules = reactive<FormRules<typeof form>>({
  userName: { required: true, message: '请输入登录账号', trigger: 'blur' },
  passWord: { required: true, message: '请输入登录密码', trigger: 'blur' }
});

const loading = ref(false);
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, _fields) => {
    if (valid) {
      loading.value = true;
      useUserStore().login(form).then(() => {
        router.push({ path: '/' });
      }).finally(() => {
        loading.value = false;
      });
    }
  });
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