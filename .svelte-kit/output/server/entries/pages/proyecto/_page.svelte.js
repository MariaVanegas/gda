import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index.js";
import { b as blockUrl, l as lang } from "../../../chunks/store.js";
import { p as page } from "../../../chunks/stores.js";
const Product_svelte_svelte_type_style_lang = "";
const Block_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1vocnye.svelte-1vocnye{width:50px;height:50px;cursor:pointer;background:none;border:none;border-radius:5px}button.svelte-1vocnye.svelte-1vocnye:hover{background:lightgray}img.svelte-1vocnye.svelte-1vocnye{width:100%;object-fit:cover}iframe.svelte-1vocnye.svelte-1vocnye{width:100%;min-height:40vw}.blocks-container.svelte-1vocnye.svelte-1vocnye{padding:20px;display:flex;flex-flow:column;gap:40px}.top-menu-container.svelte-1vocnye.svelte-1vocnye{display:flex;justify-content:space-between;gap:10px}ul.svelte-1vocnye.svelte-1vocnye{list-style-type:none;font-size:14px;cursor:pointer}li.svelte-1vocnye.svelte-1vocnye:hover{background:lightgray}.full-height.svelte-1vocnye.svelte-1vocnye{box-sizing:border-box;display:flex;flex-flow:column;gap:15px;align-items:center}.text-container-full.svelte-1vocnye.svelte-1vocnye{padding:15px}.mini-title.svelte-1vocnye.svelte-1vocnye{text-align:center;font-weight:bold}.presentation.svelte-1vocnye.svelte-1vocnye{display:grid;grid-template-columns:3fr 1fr;grid-gap:25px;border-bottom:2px solid var(--stroke);padding-bottom:15px}.presentation.svelte-1vocnye .left.svelte-1vocnye{display:flex;flex-flow:column;justify-content:end}.presentation.svelte-1vocnye .right.svelte-1vocnye{display:flex;flex-flow:column;justify-content:space-between}.presentation.svelte-1vocnye h2.svelte-1vocnye{padding:0px;margin:0px}.column-container.svelte-1vocnye.svelte-1vocnye{display:grid;grid-template-columns:1fr 1fr;grid-gap:30px}.fabrication-container.svelte-1vocnye.svelte-1vocnye{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px}.fabrication-container.svelte-1vocnye>.svelte-1vocnye{place-self:center}.montage-container.svelte-1vocnye.svelte-1vocnye{margin:auto;width:60%}.video-container.svelte-1vocnye.svelte-1vocnye{width:100%}",
  map: null
};
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_blockUrl;
  let $$unsubscribe_lang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_blockUrl = subscribe(blockUrl, (value) => value);
  $$unsubscribe_lang = subscribe(lang, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let param = $page.url.searchParams.get("p");
  let row = param || 1;
  console.log(param, row);
  $$result.css.add(css);
  {
    {
      row = param || 1;
    }
  }
  $$unsubscribe_blockUrl();
  $$unsubscribe_lang();
  $$unsubscribe_page();
  return `${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Block, "Block").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
