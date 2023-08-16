import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

interface Sidebar {
  opened: boolean
}
enum DeviceEnum {
  Mobile,
  Desktop
}


export const useAppStore = defineStore('app', () => {
  /** 侧边栏状态 */
  const sidebar: Sidebar = reactive({
    opened: false,
  });
  /** 设备类型 */
  const device = ref<DeviceEnum>(DeviceEnum.Desktop);


  /** 切换侧边栏 */
  const toggleSidebar = () => {
    sidebar.opened = !sidebar.opened;
  };
  /** 关闭侧边栏 */
  const closeSidebar = () => {
    sidebar.opened = false;
  };

  return { device, sidebar, toggleSidebar, closeSidebar };
});
