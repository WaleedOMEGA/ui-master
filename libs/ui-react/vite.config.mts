/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default async () => {
  return defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/ui-react',
    plugins: [
      react(),
      nxViteTsPaths(),
      nxCopyAssetsPlugin(['*.md']),
      dts({
        entryRoot: 'src',
        tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
        pathsToAliases: false,
      }),
    ],
    build: {
      outDir: '../../dist/libs/ui-react',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        entry: 'src/index.ts',
        name: 'ui-react',
        fileName: 'index',
        formats: ['es' as const],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },
  });
};
