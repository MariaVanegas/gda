import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
import { c as currentPage, g as galleryUrl, t } from "../../chunks/store.js";
const GalleryElement_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".gallery-div.svelte-ewwq37{box-sizing:border-box;display:grid;padding:30px;grid-gap:15px;grid-template-columns:1fr 1fr;cursor:pointer;background:var(--fill);height:100%}.gallery-img.svelte-ewwq37{width:100%;height:200px;border-radius:10px;object-fit:cover}.right.svelte-ewwq37{display:flex;flex-flow:column;justify-content:end}.gallery-name.svelte-ewwq37{font-family:var(--headfont);font-size:16px}.gallery-description.svelte-ewwq37{font-size:16px}",
  map: null
};
const GalleryElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentPage;
  $$unsubscribe_currentPage = subscribe(currentPage, (value) => value);
  let { data } = $$props;
  let { i } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  $$result.css.add(css$2);
  $$unsubscribe_currentPage();
  return `<a class="${"clean-link"}"${add_attribute("href", `./gda/proyecto`, 0)}><div class="${"gallery-div svelte-ewwq37"}"><div class="${"left"}"><img class="${"gallery-img no-select svelte-ewwq37"}"${add_attribute("alt", data.nombreFamilia, 0)}${add_attribute("src", data.fotoPrototipo, 0)}></div>
    <div class="${"right svelte-ewwq37"}"><h1 class="${"gallery-name svelte-ewwq37"}">${escape(data.nombreFamilia)}</h1>
      <p class="${"gallery-description svelte-ewwq37"}">${escape(data.Subtitulo)}</p></div></div>
</a>`;
});
const Gallery_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".gallery-container.svelte-jutxzt.svelte-jutxzt{display:grid;grid-template-columns:repeat(auto-fill, minmax(350px, 1fr));grid-gap:1px;background:var(--stroke)}.gallery-title.svelte-jutxzt.svelte-jutxzt{padding:40px;background:var(--fill)}.gallery-title.svelte-jutxzt h1.svelte-jutxzt{margin:10px 0px;line-height:35px;font-size:36px}.gallery-title.svelte-jutxzt h2.svelte-jutxzt{margin:0px;font-size:16px}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mainData } = $$props;
  if ($$props.mainData === void 0 && $$bindings.mainData && mainData !== void 0)
    $$bindings.mainData(mainData);
  $$result.css.add(css$1);
  return `${mainData ? `<div><div class="${"gallery-container svelte-jutxzt"}"><div class="${"gallery-title svelte-jutxzt"}"><h1 class="${"no-select svelte-jutxzt"}">\xA1 Mucha<br>l\xE1mpara !</h1>
        <h2 class="${"no-select svelte-jutxzt"}">COLECCI\xD3N 2022-2</h2>
        <h2 class="${"no-select svelte-jutxzt"}">DISE\xD1O INDUSTRIAL UEB</h2></div>
      ${each(mainData, (data, i) => {
    return `${validate_component(GalleryElement, "GalleryElement").$$render($$result, { data, i }, {}, {})}`;
  })}
      ${mainData.length % 2 === 0 ? `<div class="${"gallery-title svelte-jutxzt"}"></div>` : ``}</div></div>` : ``}`;
});
const MainPage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".top-menu.svelte-ru04ua{padding:15px;display:flex;justify-content:end}.menu-item.svelte-ru04ua{color:var(--stroke);font-size:20px;cursor:pointer}.title.svelte-ru04ua{padding:10px;margin:0px;font-size:22px;text-decoration:underline;color:var(--fill);background:var(--stroke)}.title.svelte-ru04ua:hover{color:lightgray}a.svelte-ru04ua{text-decoration:none}.gallery-container.svelte-ru04ua{padding:25px}",
  map: null
};
const MainPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $galleryUrl, $$unsubscribe_galleryUrl;
  let $t, $$unsubscribe_t;
  $$unsubscribe_galleryUrl = subscribe(galleryUrl, (value) => $galleryUrl = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  console.log($galleryUrl);
  let mainData;
  $$result.css.add(css);
  $$unsubscribe_galleryUrl();
  $$unsubscribe_t();
  return `<div class="${"top-menu svelte-ru04ua"}"><a class="${"menu-item clean-link svelte-ru04ua"}" href="${"./gda/acerca"}">Acerca de</a></div>
<header class="${"header"}"><a href="${"https://forms.gle/aGFP9d44jM6K5nf46"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-ru04ua"}"><h1 class="${"title no-select svelte-ru04ua"}">${escape($t.mainPage.title)}</h1></a></header>
<div class="${"gallery-container svelte-ru04ua"}">${validate_component(Gallery, "Gallery").$$render($$result, { mainData }, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainPage, "MainPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
