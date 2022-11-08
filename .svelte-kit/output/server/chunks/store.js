import { r as readable, d as derived, w as writable } from "./index2.js";
const translations = {
  "Espa\xF1ol": {
    mainPage: {
      title: "\xA1vote aqu\xED por su proyecto favorito de este semestre!",
      subtitle: "Subt\xEDtulo del sitio"
    },
    gid: "1112919751"
  },
  "English": {
    mainPage: {
      title: "\xA1vote aqu\xED por su proyecto favorito de este semestre!",
      subtitle: "Subtitle of the site"
    },
    gid: "1483241675"
  }
};
const url = "https://docs.google.com/spreadsheets/d/1XLPHogssjVbDPgosBZ0uxGn8exd1ZgnNdPUonwrzYjA/export?format=csv&gid=";
const galleryUrl = readable(url + "0");
const lang = writable("Espa\xF1ol");
const blockUrl = derived([lang], ($lang) => url + translations[$lang].gid);
const t = derived([lang], ($lang) => translations[$lang]);
readable(Object.keys(translations));
export {
  blockUrl as b,
  galleryUrl as g,
  lang as l,
  t
};
