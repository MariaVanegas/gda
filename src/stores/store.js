import { readable, writable, derived } from 'svelte/store';

const translations = {
  "Español": {
    mainPage: {
      title: "¡vote aquí por su proyecto favorito de este semestre!",
      subtitle: "Subtítulo del sitio"
    }
  },
  "English": {
    mainPage: {
      title: "¡vote aquí por su proyecto favorito de este semestre!",
      subtitle: "Subtitle of the site"
    }
  }
}

export const lang = writable("Español");
export const t = derived([lang], ($lang) => translations[$lang]);
export const langs = readable(Object.keys(translations));