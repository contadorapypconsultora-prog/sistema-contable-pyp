import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * Esta configuración permite que Vite reconozca y procese 
   * los archivos de React (.jsx) utilizando el plugin oficial.
   */
  plugins: [react()],
  server: {
    // Configuración opcional para el servidor de desarrollo
    port: 3000,
    open: true
  },
  build: {
    // Directorio de salida para cuando subas a Vercel
    outDir: 'dist',
  }
})