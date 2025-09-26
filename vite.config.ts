//vite.config.js

import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation"; 

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the
    // `VITE_` prefix.
    mode = 'dev';
    const env = loadEnv(mode, process.cwd(), 'VITE_')
    return {
        plugins: [
            react(),
            federation({
                name: "person",
                filename: "remoteEntry.js",
                remotes: {
                    "./Person": "./src/components/Person.tsx",
                },
                shared: ["react", "react-dom"],
            }),
            
        ],
        server: {
            port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
        },
    //     define: {
    //   // Provide an explicit app-level constant derived from an env var.
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
    }
});
