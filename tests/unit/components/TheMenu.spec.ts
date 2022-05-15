import Vue from "vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import TheMenu from "@/components/TheMenu.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();

describe("TheMenu.vue", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("show pulldown when clicked", async () => {
    const wrapper = mount(TheMenu, { localVue, vuetify });
    await wrapper.find("[data-testid=menu-btn]").trigger("click");
  });
});
