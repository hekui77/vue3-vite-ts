<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');
</script>

<template>
  <div class="app-container">
    <p>menu1-2</p>
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<style scoped lang="scss">

</style>
