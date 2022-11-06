import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-container.svelte-gh4q6k.svelte-gh4q6k{padding:15px}.title.svelte-gh4q6k.svelte-gh4q6k{padding:110px 0px 0px 0px;display:grid;grid-template-columns:1.5fr 1fr;grid-gap:35px;align-items:end;border-bottom:solid 1px var(--stroke)}h1.svelte-gh4q6k.svelte-gh4q6k{margin:0px;padding:0px;font-size:50px}.title.svelte-gh4q6k p.svelte-gh4q6k{padding:20px;margin:0px}.about-text.svelte-gh4q6k.svelte-gh4q6k{display:grid;grid-template-columns:50% 50%;grid-gap:35px}.about-text.svelte-gh4q6k .left.svelte-gh4q6k{border-right:solid 1px var(--stroke);padding:0px 20px 0px 10px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"about-container svelte-gh4q6k"}"><div class="${"top-menu-container"}"><a href="${"./proyectos"}"><button>Home</button></a></div>
  
  <div class="${"title svelte-gh4q6k"}"><h1 class="${"svelte-gh4q6k"}">Acerca de...</h1>
    <p class="${"svelte-gh4q6k"}">fdsdfsdf</p></div>

  <div class="${"about-text svelte-gh4q6k"}"><div class="${"left svelte-gh4q6k"}"><h2>Gesti\xF3n de artesan\xEDas</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum neque eget malesuada mollis. Nunc eu elit vitae elit viverra scelerisque et a lorem. Nam quis pellentesque ex. Pellentesque euismod, ipsum sed ultrices sollicitudin, massa dolor pulvinar orci, in congue massa odio quis urna. Proin vitae lorem orci. Cras lacinia blandit ex, et tristique libero feugiat ac. 
        Sed id orci eros. Praesent mollis lorem id ornare facilisis. Curabitur porttitor neque velit, a volutpat metus ultricies ut. Quisque ut metus quis diam vulputate viverra. Proin ligula justo, commodo sit amet felis at, convallis volutpat erat. Fusce id ultrices turpis.
      </p></div>
    <div></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
