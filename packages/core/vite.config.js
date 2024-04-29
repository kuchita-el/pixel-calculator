import {defineConfig} from "vite";
import {resolve} from "path";
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ["es"],
      fileName: "index"
    }
  },
  plugins: [dtsPlugin({
    tsconfigPath: "./tsconfig.build.json"
  })]
})
