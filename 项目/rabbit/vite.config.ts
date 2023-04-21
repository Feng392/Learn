import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 让@好使
    alias: {
      "@": "/src",
    },
  },
  // 配置代理
  server: {
    proxy: {
      "/api": {
        target: "https://apipc-xiaotuxian-front.itheima.net",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});