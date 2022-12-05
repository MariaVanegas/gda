<script>
  import { t, galleryUrl } from '../stores/store';
  import Gallery from './Gallery.svelte';
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  console.log($galleryUrl);

  let mainData;
  onMount(async () => {
    mainData = (await loadData($galleryUrl)).slice(1);
  })

  async function loadData(path) {
    const data = await csv(path);
    return data
  }
</script>

<div class="top-menu">
  <a class="menu-item clean-link" href="./gda/acerca">Acerca de</a>
</div>
<header class="header">
  <a href="https://forms.gle/aGFP9d44jM6K5nf46" target="_blank" rel="noreferrer"><h1 class="title no-select">{$t.mainPage.title}</h1></a>
</header>
<div class="gallery-container">
  <Gallery {mainData}/>
</div>

<style>
  .top-menu {
    padding: 15px;
    display: flex;
    justify-content: end;
  }

  .menu-item {
    color: var(--stroke);
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    padding: 10px;
    margin: 0px;
    font-size: 22px;
    text-decoration: underline;
    color: var(--fill);
    background: var(--stroke);
  }

  .title:hover {
    color: lightgray;
  }

  a {
    text-decoration: none;
  }
  
  .gallery-container {
    padding: 25px;
  }
</style>