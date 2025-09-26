import ViteRestart from 'vite-plugin-restart';
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import postcssUrl from 'postcss-url';

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;

export default defineConfig(({ command, mode }) => ({
  build: {
    // Prevents build steps from writing to the Storybook directory
    manifest: false,
    emptyOutDir: false,
    // outDir: 'storybook/dist/',
    outDir: 'dist/',
    rollupOptions: {
      input: {
        app: 'storybook/src/assets/js/app.js',
      },
      output: {
        assetFileNames: 'css/[name].css',
        entryFileNames: 'js/[name].js',
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        postcssUrl({
          url: (asset) => {
            // Icon files use absolute paths, update to reference Storybook
            const fileName = asset.url.split('/').pop();
            return `../../storybook/src/assets/icomoon/fonts/${fileName}`;
          },
        }),
        tailwindcss({
          config: resolve(__dirname, './storybook/tailwind.config.js')
        }),
      ],
    },
  },

  // Adjust Vites dev server to work with DDEV
  // https://vitejs.dev/config/server-options.html
  server: {
    // respond to all network requests:
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type']
    },
    allowedHosts: true,
    host: '0.0.0.0',
    port: port,
    origin: origin,
  },
  plugins: [
    ViteImageOptimizer({
      opacity: 75
      /* pass your config */
    }),
    ViteRestart({
      reload: [        
        'storybook/src/**/*',
        'templates/**/*',
      ],
    }),
  ]
}))