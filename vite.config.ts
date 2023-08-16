import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path, { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: {
        // @ 符号指向 src 目录
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // https://openbase.com/js/vite-plugin-mock
      viteMockServe({
        ignore: /^_/,
        mockPath: './mock/',
        supportTs: true,
        watchFiles: true,
        localEnabled: command === 'serve',
        logger: true,
      }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
        },
      }
    }
  };
});
