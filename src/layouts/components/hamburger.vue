<script lang="ts" setup>
import { useAppStore } from '@/stores/modules/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { sidebar } = storeToRefs(appStore);

const handleToggleClick = () => {
  appStore.toggleSidebar(false);
};
</script>

<template>
  <div @click="handleToggleClick">
    <el-icon :size="20" class="icon">
      <Fold v-if="sidebar.opened" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.icon {
  vertical-align: middle;
}
</style>
