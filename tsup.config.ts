import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts', 'src/react.ts', 'src/vue.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',

  minify: !options.watch,

  external: ['react-dom', 'vue'],
}))
