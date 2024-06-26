import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: {enabled: true},
    build: {transpile: ["vuetify"]},
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error Vuetify 公式でも ts-expect-error を使用している。
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        "@nuxt/eslint",
        "@nuxt/test-utils/module",
        "@vee-validate/nuxt"
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    typescript: {
        typeCheck: true,
        strict: true
    }
})
