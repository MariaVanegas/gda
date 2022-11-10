import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--stroke:rgb(60, 75, 81);--fill:#ffffff;color:var(--stroke);font-family:'Nunito Sans', sans-serif}.general.svelte-jxiyls{max-width:800px;margin:auto;border:solid 15px var(--stroke);background:var(--fill)}body{box-sizing:content-box;padding:0px;margin:0px}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.clean-link{all:unset}.header{text-align:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10r6q7b_START --><style>@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap');
  </style><!-- HEAD_svelte-10r6q7b_END -->`, ""}

<div class="${"general svelte-jxiyls"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
