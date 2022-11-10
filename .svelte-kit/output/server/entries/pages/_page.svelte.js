import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { M as MainPage } from "../../chunks/MainPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainPage, "MainPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
