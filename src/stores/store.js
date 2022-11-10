import { readable, writable, derived } from 'svelte/store';

const translations = {
  "Español": {
    mainPage: {
      title: "¡vote aquí por su proyecto favorito de este semestre!",
      subtitle: "Subtítulo del sitio"
    },
    gid: '1112919751'
  },
  "English": {
    mainPage: {
      title: "¡vote aquí por su proyecto favorito de este semestre!",
      subtitle: "Subtitle of the site"
    },
    gid: '1483241675'
  }
}

const url = 'https://docs.google.com/spreadsheets/d/1XLPHogssjVbDPgosBZ0uxGn8exd1ZgnNdPUonwrzYjA/export?format=csv&gid=';

export const galleryUrl = readable(url+'0');
export const lang = writable("Español");

export const currentPage = writable(1);

export const blockUrl = derived([lang], ($lang) => url+translations[$lang].gid);

export const t = derived([lang], ($lang) => translations[$lang]);
export const langs = readable(Object.keys(translations));