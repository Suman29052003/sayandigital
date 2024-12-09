// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this for path resolution

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias for better path resolution
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
});
