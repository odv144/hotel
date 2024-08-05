import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd());
  const apiURL = env.VITE_API_URL;
  if (mode !== "production") {
    return {
      server: {
        proxy: {
          "/api": {
            target: apiURL,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
            secure: false,
            // Añade este campo para permitir el manejo de cookies
            cookieDomainRewrite: "localhost",
          },
        },
      },
      plugins: [react()],
      // base: mode === 'production' ? apiURL : '/',
      base: "/",
      build: {
        outDir: "dist",
      },
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
