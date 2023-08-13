<template>
  <div>
    {{ userInfo.username }}
    {{ userInfo.age }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user';

const userInfo = useUserStore().userInfo;

</script>

<style scoped>

</style>