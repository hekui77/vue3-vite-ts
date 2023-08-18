<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const labelWidth: string = '100px';


const onSubmit = () => {
  console.log('submit!');
};
</script>

<template>
  <div class="app-container">
    <el-card>
      <el-form :model="form" :label-width="labelWidth" label-position="right" :inline="true">
        <el-row :gutter="24">
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item label="菜单名称">
              <el-input v-model="form.name" placeholder="请输入菜单名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item label="状态">
              <el-input v-model="form.name" placeholder="请输入状态" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item label="搜索条件">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item label="搜索条件">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item label="搜索条件">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12" :md="6" :xs="24">
            <el-form-item>
              <span :style="{ width: labelWidth }"></span>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.el-form-item {
  width: 100%;
}
</style>
