import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  // uni 是 uni-app 官方插件， uvtw 一定要放在 uni 后，对生成文件进行处理
  plugins: [
    uni(),
    uvwt(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dirs: ['src/utils/**', 'src/stores/modules/**', 'src/hooks/**'],
      dts: 'src/auto-import/imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: 'src/auto-import/eslintrc-auto-import.json',
      },
    }),
    h5ProdEffectPlugin(),
  ].concat(
    process.env.UNI_PLATFORM === 'h5'
      ? [
          legacy({
            // 兼容浏览器列表
            targets: [
              'Android >= 7',
              'chrome >= 51',
              'firefox >= 54',
              'ios >= 10',
            ],
          }),
          viteCompression({
            threshold: 1000,
          }),
        ]
      : []
  ),
  optimizeDeps: {
    exclude: ['sard-uniapp'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        // require('tailwindcss')() 和 require('tailwindcss') 等价的，表示什么参数都不传，如果你想传入参数
        // require('tailwindcss')({} <- 这个是postcss插件参数)
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  build: {
    minify: 'terser'
  }
})
