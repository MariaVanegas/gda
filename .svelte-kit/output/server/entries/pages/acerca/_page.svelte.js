import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-efkheg.svelte-efkheg{width:50px;height:50px;cursor:pointer;background:none;border:none;border-radius:5px}img.svelte-efkheg.svelte-efkheg{width:100%}.about-container.svelte-efkheg.svelte-efkheg{padding:15px}.title.svelte-efkheg.svelte-efkheg{padding:110px 0px 0px 0px;display:grid;grid-template-columns:1.5fr 1fr;grid-gap:35px;align-items:end;border-bottom:solid 1px var(--stroke)}h1.svelte-efkheg.svelte-efkheg{margin:0px;padding:0px;font-size:50px}.about-text.svelte-efkheg.svelte-efkheg{display:grid;grid-template-columns:50% 50%;grid-gap:35px}.about-text.svelte-efkheg .left.svelte-efkheg{border-right:solid 1px var(--stroke);padding:0px 20px 0px 10px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"about-container svelte-efkheg"}"><div class="${"top-menu-container"}"><a href="${"./"}"><button class="${"svelte-efkheg"}"><img src="${"assets/home-01.png"}" alt="${"home"}" class="${"svelte-efkheg"}"></button></a></div>
  
  <div class="${"title svelte-efkheg"}"><h1 class="${"svelte-efkheg"}">Acerca de...</h1></div>

  <div class="${"about-text svelte-efkheg"}"><div class="${"left svelte-efkheg"}"><h2>Gesti\xF3n de artesan\xEDas</h2>
      <p>La producci\xF3n a peque\xF1a escala, incluso la artesanal, est\xE1 influenciada por cambios en el contexto, como la masificaci\xF3n de tecnolog\xEDas de fabricaci\xF3n r\xE1pida, el acceso a redes sociales y el comercio virtual. As\xED, se crean escenarios donde es posible redefinir el valor que el dise\xF1o industrial puede aportar.
      </p>
      <p>Los dos escenarios planteados en el ejercicio principal de este semestre fueron: 1. La experiencia directa con la transformaci\xF3n de materiales y 2. La creaci\xF3n de piezas de presentaci\xF3n de un nuevo producto.
      </p>
      <p>Los estudiantes definieron un usuario para su propuesta, en el que identificaron los aspectos principales a nivel de est\xE9tica y funci\xF3n necesarios para satisfacer a ese usuario te\xF3rico. En cuanto a la fabricaci\xF3n, se realiz\xF3 un proceso similar al que tiene lugar en la artesan\xEDa urbana o contempor\xE1nea, caracterizado por la aplicaci\xF3n de una t\xE9cnica o material con posibilidades novedosas, favoreciendo siempre la producci\xF3n de series cortas, bien sea a trav\xE9s de elementos tangibles como moldes y planos o el aprovechamiento de intangibles como el conocimiento vinculado a cada etapa del proceso de obtenci\xF3n y la destreza en la realizaci\xF3n de una t\xE9cnica.
      </p>
      <p>Los estudiantes fueron los protagonistas del proceso de prototipado, que los enfrent\xF3 a las limitaciones y potencialidades de sus propuestas y as\xED descubrieron, a trav\xE9s de la experiencia directa, los factores que influyen en la definici\xF3n formal de una propuesta de producto acorde con las posibilidades de un entorno con baja industrializaci\xF3n pero con alta recursividad y capacidad creadora.
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
