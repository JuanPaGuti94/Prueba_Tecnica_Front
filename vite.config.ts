import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 4200,
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
    },
  },
  test: {
    exclude: ['**/node_modules/**', './src/main.tsx','**/*.interface.ts', ',**/*.constants.ts'],
    include: [  '**/*.test.{ts,tsx}', '**/*.spec.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-test.ts'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      enabled: true,
      exclude: ['**/node_modules/**', './src/main.tsx', '**/index.ts','**/*.interface.ts', '**/*.d.ts',],
      include: ['**/src/**/*.{ts,tsx,js,jsx}'],
      reporter: ['lcov','json','text','clover','html'],
    },
  },
});
