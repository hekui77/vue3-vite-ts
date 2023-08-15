import { createApp } from 'vue';
import '@/styles/index.scss';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from '@/router/index';
import '@/router/permission';
import store from '@/stores/index';
import 'element-plus/dist/index.css';

const app = createApp(App);

// 全局注册 Element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store).use(router);

app.mount('#app');