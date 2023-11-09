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


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
