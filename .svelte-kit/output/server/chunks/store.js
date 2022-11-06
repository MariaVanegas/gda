import { d as derived, r as readable, w as writable } from "./index2.js";
const translations = {
  "Espa\xF1ol": {
    mainPage: {
      title: "\xA1vote aqu\xED por su proyecto favorito de este semestre!",
      subtitle: "Subt\xEDtulo del sitio"
    }
  },
  "English": {
    mainPage: {
      title: "\xA1vote aqu\xED por su proyecto favorito de este semestre!",
      subtitle: "Subtitle of the site"
    }
  }
};
const lang = writable("Espa\xF1ol");
const t = derived([lang], ($lang) => translations[$lang]);
readable(Object.keys(translations));
export {
  lang as l,
  t
};
