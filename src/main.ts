import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from '@/router/index';


const app = createApp(App);

// 全局注册 Element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);

app.mount('#app');