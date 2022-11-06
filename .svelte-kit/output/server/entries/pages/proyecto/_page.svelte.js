import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Product_svelte_svelte_type_style_lang = "";
const Block_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-nydsl7.svelte-nydsl7{width:100%;object-fit:cover;border:red 1px solid}iframe.svelte-nydsl7.svelte-nydsl7{width:100%;min-height:40vw}.blocks-container.svelte-nydsl7.svelte-nydsl7{padding:20px;display:flex;flex-flow:column;gap:40px}.top-menu-container.svelte-nydsl7.svelte-nydsl7{display:flex;gap:10px}.full-height.svelte-nydsl7.svelte-nydsl7{box-sizing:border-box;display:flex;flex-flow:column;gap:15px;align-items:center}.text-container-full.svelte-nydsl7.svelte-nydsl7{padding:15px}.mini-title.svelte-nydsl7.svelte-nydsl7{text-align:center;font-weight:bold}.presentation.svelte-nydsl7.svelte-nydsl7{display:grid;grid-template-columns:3fr 1fr;grid-gap:25px;border-bottom:2px solid var(--stroke);padding-bottom:15px}.presentation.svelte-nydsl7 .left.svelte-nydsl7{display:flex;flex-flow:column;justify-content:end}.presentation.svelte-nydsl7 .right.svelte-nydsl7{display:flex;flex-flow:column;justify-content:space-between}.presentation.svelte-nydsl7 h2.svelte-nydsl7{padding:0px;margin:0px}.column-container.svelte-nydsl7.svelte-nydsl7{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px}.fabrication-container.svelte-nydsl7.svelte-nydsl7{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px}.fabrication-container.svelte-nydsl7>.svelte-nydsl7{place-self:center}.montage-container.svelte-nydsl7.svelte-nydsl7{margin:auto;width:60%}.video-container.svelte-nydsl7.svelte-nydsl7{width:100%}",
  map: null
};
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Block, "Block").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
