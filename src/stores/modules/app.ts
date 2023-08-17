import { reactive } from 'vue';
import { defineStore } from 'pinia';

interface Sidebar {
  opened: boolean,
  isMobile: boolean,
  withoutAnimation: boolean
}


export const useAppStore = defineStore('app', () => {
  /** 侧边栏状态 */
  const sidebar: Sidebar = reactive({
    opened: false, // 是否展开侧边栏
    isMobile: false, // 是否为移动端
    withoutAnimation: false, // 是否禁用动画
  });


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
  /** 切换设备类型 */
  const toggleDevice = (value: boolean) => {
    sidebar.isMobile = value;
  };

  return { sidebar, toggleSidebar, closeSidebar, toggleDevice };
});
