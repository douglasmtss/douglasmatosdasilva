import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// const htmlPlugin = () => {
//   return {
//     name: 'html-transform',
//     transformIndexHtml(html) {
//       let htmlUpdated = html.replace(
//         /<title>(.*?)<\/title>/,
//         `<title>Douglas Matos</title>`,
//       )

//       htmlUpdated = htmlUpdated.replace(
//         /<link rel="icon"(.*?) \/>/,
//         `<link rel="icon" type="image/svg+xml" href="/logo.png" />`,
//       )

//       htmlUpdated = htmlUpdated.replace(
//         /<html lang="en">/,
//         `<html lang="en" class="dark">`,
//       )
//       return htmlUpdated
//     },
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // htmlPlugin()
  ],
})
