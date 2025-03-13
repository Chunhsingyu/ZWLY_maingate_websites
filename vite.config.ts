import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/ZWLY_maingate_websites/', // 确保与 GitHub Pages 的路径一致
  build: {
    outDir: 'dist'
  }
});