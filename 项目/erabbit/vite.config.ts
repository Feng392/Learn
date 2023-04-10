import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置别名
  resolve: {
    // 让别名生效
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})