<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const key = computed(() => {
  return route.path;
});
</script>

<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="key" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-main {
  width: 100%;
  background-color: var(--v3-body-bg-color);
}

.app-scrollbar {
  height: 100%;
  overflow: auto;
  @include scrollbar;
}
</style>
