import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {mount} from "@vue/test-utils";
import Index from "~/pages/index.vue";
import {expect, test} from "vitest";

const vuetify = createVuetify({
  components: components,
  directives: directives
})

global.ResizeObserver = require("resize-observer-polyfill")

test("初期状態", () => {
  const wrapper = mount({
    template: `<v-layout><Index></Index></v-layout>`
  }, { global: { components: {Index}, plugins: [vuetify] } })

  expect(wrapper.text()).toContain("")
})
