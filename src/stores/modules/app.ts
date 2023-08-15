import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

interface Sidebar {
  opened: boolean
  withoutAnimation: boolean
}
enum DeviceEnum {
  Mobile,
  Desktop
}


export const useAppStore = defineStore('app', () => {
  /** 侧边栏状态 */
  const sidebar: Sidebar = reactive({
    opened: false,
    withoutAnimation: false
  });
  /** 设备类型 */
  const device = ref<DeviceEnum>(DeviceEnum.Desktop);


  /** 切换侧边栏 */
  const toggleSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = !sidebar.opened;
    sidebar.withoutAnimation = withoutAnimation;
  };
  /** 关闭侧边栏 */
  const closeSidebar = (withoutAnimation: boolean) => {
    sidebar.opened = false;
    sidebar.withoutAnimation = withoutAnimation;
  };

  return { device, sidebar, toggleSidebar, closeSidebar };
});
