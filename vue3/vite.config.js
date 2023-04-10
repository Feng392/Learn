import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'views': '/src/views',
      'network': '/src/network',
      'assets': '/src/assets',
      'common': '/src/common',
    }
  }
})