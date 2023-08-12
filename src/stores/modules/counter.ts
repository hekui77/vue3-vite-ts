import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('main', () => {
  const count = ref(0);

  const countAdd = () => {
    count.value++;
  };

  return { countAdd, count };
});
