import VitePluginStyleImport from 'vite-plugin-style-import';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    VitePluginStyleImport({
      libs: [
        {
          libraryName: 'bootstrap',
          esModule: true,
          resolveStyle: (name) => `bootstrap/dist/css/${name}.css`,
        },
      ],
    }),
  ],
});