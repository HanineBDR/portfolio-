import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
<<<<<<< HEAD
      // Use /portfolio-/ only in production, / for local dev
      base: process.env.NODE_ENV === 'production' ? '/portfolio-/' : '/',
=======
      // Add base URL for GitHub Pages
      base: '/portfolio-/', // IMPORTANT: Replace with your exact repo name if different
>>>>>>> f7abb7d2b54b96b8d602549ab0bfdc20f5dde58c
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
<<<<<<< HEAD
});
=======
});
>>>>>>> f7abb7d2b54b96b8d602549ab0bfdc20f5dde58c
