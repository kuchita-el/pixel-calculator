import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from "@stylistic/eslint-plugin"

export default withNuxt({
    plugins: {"@stylistic": stylistic}
})
