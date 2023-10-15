import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://react-devops-1303844936.cos.ap-chengdu.myqcloud.com',
})

