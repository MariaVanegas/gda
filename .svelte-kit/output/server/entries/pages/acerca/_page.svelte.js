import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-j9i9ih.svelte-j9i9ih{width:50px;height:50px;cursor:pointer;background:none;border:none;border-radius:5px}img.svelte-j9i9ih.svelte-j9i9ih{width:100%}.about-container.svelte-j9i9ih.svelte-j9i9ih{padding:15px}.title.svelte-j9i9ih.svelte-j9i9ih{padding:110px 0px 0px 0px;display:grid;grid-template-columns:1.5fr 1fr;grid-gap:35px;align-items:end;border-bottom:solid 1px var(--stroke)}h1.svelte-j9i9ih.svelte-j9i9ih{margin:0px;padding:0px;font-size:50px}.about-text.svelte-j9i9ih.svelte-j9i9ih{display:grid;grid-template-columns:50% 50%;grid-gap:35px}.about-text.svelte-j9i9ih .left.svelte-j9i9ih{border-right:solid 1px var(--stroke);padding:0px 20px 0px 10px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"about-container svelte-j9i9ih"}"><div class="${"top-menu-container"}"><a href="${"./"}"><button class="${"svelte-j9i9ih"}"><img src="${"assets/home-01.png"}" alt="${"home"}" class="${"svelte-j9i9ih"}"></button></a></div>
  
  <div class="${"title svelte-j9i9ih"}"><h1 class="${"svelte-j9i9ih"}">Acerca de...</h1></div>

  <div class="${"about-text svelte-j9i9ih"}"><div class="${"left svelte-j9i9ih"}"><h2>Gesti\xF3n de artesan\xEDas</h2>
      <p>Hemos entendido la gesti\xF3n de un proyecto de dise\xF1o para la artesan\xEDa como un proceso en el que la exploraci\xF3n y el reconocimiento de recursos humanos y t\xE9cnicos disponibles en el contexto, permite la creaci\xF3n de nuevos objetos con potencial de productos.
      </p>
      <p>Los proyectos realizados por los estudiantes est\xE1n enmarcados en el m\xE9todo de producci\xF3n denominado artesan\xEDa contempor\xE1nea, el cual est\xE1 cada vez m\xE1s extendido por su flexibilidad, pues al no depender de organizaciones robustas o de grandes capitales, impulsa la generaci\xF3n de empleo y nutre la cultura material de cada regi\xF3n a la par que abre escenarios de innovaci\xF3n en materiales, t\xE9cnicas y el rol que los dise\xF1adores pueden tener.
      </p>
      <p>Los prototipos presentados hoy son el resumen y la evidencia del criterio de los dise\xF1adores en formaci\xF3n, que partiendo de una lista de objetivos de proyecto, se dieron a la tarea de resolver, a trav\xE9s de un concepto de familia de l\xE1mparas, cuestiones como: la selecci\xF3n de materiales, la b\xFAsqueda de proveedores, la ejecuci\xF3n de t\xE9cnicas manuales, la inclusi\xF3n de recursos tecnol\xF3gicos y las est\xE9ticas que tienen la intenci\xF3n de comunicar su percepci\xF3n de nuestro entorno natural y cultural.
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
