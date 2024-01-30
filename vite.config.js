import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSass  from 'vite-plugin-sass'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSass()],
  css:{preprocessorOptions:{sass:{}}}
})
