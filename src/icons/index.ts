import { type App } from 'vue';
import svgIcon from '@/components/svgIcon.vue'; // Svg Component
import 'virtual:svg-icons-register';

export function loadSvg(app: App) {
  app.component('svgIcon', svgIcon);
}
