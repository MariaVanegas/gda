<script>
  import { t } from '../stores/store';
  import Gallery from './Gallery.svelte';
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  let mainData;
  const url = 'https://docs.google.com/spreadsheets/d/1XLPHogssjVbDPgosBZ0uxGn8exd1ZgnNdPUonwrzYjA/export?format=csv&gid=0';
  onMount(async () => {
    mainData = (await loadData(url)).slice(1);
  })

  async function loadData(path) {
    const data = await csv(path);
    return data
  }
</script>

<div class="top-menu">
  <a class="menu-item clean-link" href="./acerca">Acerca de</a>
</div>
<header class="header">
  <h1 class="title no-select">{$t.mainPage.title}</h1>
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
  
  .gallery-container {
    padding: 25px;
  }
</style>