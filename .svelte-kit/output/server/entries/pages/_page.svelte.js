import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index.js";
import { l as lang } from "../../chunks/store.js";
const LanguageSelector_svelte_svelte_type_style_lang = "";
const css = {
  code: ".language-selector-container.svelte-1dtqm5h{padding:30px;display:flex;align-items:center;grid-gap:20px;flex-flow:column;text-align:center}.language-prompt-container.svelte-1dtqm5h{cursor:pointer}",
  map: null
};
const LanguageSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_lang;
  $$unsubscribe_lang = subscribe(lang, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_lang();
  return `<div class="${"language-selector-container svelte-1dtqm5h"}"><div class="${"language-prompt-container no-select svelte-1dtqm5h"}"><a class="${"clean-link"}" href="${"./proyectos"}"><h1>En Espa\xF1ol</h1>
      <h2>Visita la tienda virtual</h2></a></div>

  <div class="${"language-prompt-container no-select svelte-1dtqm5h"}"><a class="${"clean-link"}" href="${"./proyectos"}"><h1>In English</h1>
      <h2>Visita the virtual store</h2></a></div>

</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LanguageSelector, "LanguageSelector").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
