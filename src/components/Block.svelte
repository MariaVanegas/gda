<script>
  import { blockUrl, lang } from '../stores/store';
  import Product from './Product.svelte';
  import { page } from '$app/stores';
  import { csv } from "d3-fetch";
  import { onMount } from "svelte";

  let data;
  let fullData;
  let row;
  let param = $page.url.searchParams.get('p');

  $: {
    row = param || 1;
    row = param <= 0 ? 1 : param;
  }

  async function changeLanguage(l) {
    $lang = l
    fullData = await loadData($blockUrl);
    data = fullData[row];
    if (data === undefined) history.back();
  }

  onMount(async () => {
    fullData = await loadData($blockUrl);
    data = fullData[row];
    if (data === undefined) history.back();
  })

  async function loadData(path) {
    const data = await csv(path);
    return data
  }

  async function nextPage() {
    row = +row + 1;
    row = row > fullData.length - 1 ? 1 : row;
  }

  function prevPage() {
    row = +row - 1;
    row = row <= 1 ? fullData.length - 1 : row;
  }
</script>

{#if data}
  <div class="blocks-container">
    <div class="top-menu-container">
      <div>
        <a href={`./proyecto?p=${row}`} target="_self"><button on:click={prevPage}><img src="assets/ant-01.png" alt="home"/></button></a>
        <a href="./"><button><img src="assets/home-01.png" alt="home"/></button></a>
        <a href={`./proyecto?p=${row}`} target="_self"><button on:click={nextPage}><img src="assets/sig-01.png" alt="home"/></button></a>
      </div>
      <div>
        <ul>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li on:click={() => changeLanguage('Español')}>Español</li>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li on:click={() => changeLanguage('English')}>English</li>
        </ul>
      </div>
    </div>

    <div class="full-height">
      <div class="presentation">
        <div class="left">
          <img src={data.fotoPrototipo} alt=""/>
        </div>
        <div class="right">
          <div>
            <img src={data.fotoEquipo} alt="">
            <p>{data.nombresDisenadores}</p>
          </div>
          <h2>{data.nombreFamilia}</h2>
        </div>
      </div>
  
      <!-- BLUEPRINT -->
      <div class="column">
        <img src={data.planoPrototipo} alt=""/>
      </div>
    </div>
    

    <div class="full-height">
      {#if data.descripcionProducto2}
        <Product description={data.descripcionProducto2} image={data.fotoProducto2} blueprint={data.planoProducto2}/>
      {/if}

      {#if data.descripcionProducto3}
        <Product description={data.descripcionProducto3} image={data.fotoProducto3} blueprint={data.planoProducto3}/>
      {/if}

      <!-- MATERIALES Y ACABADOS -->
      <div class="column-container">
        <div class="column left">
          <p>Materiales:</p>
          <p>{data.descripcionMateriales}</p>
        </div>
        <div class="column right">
          <p>Acabados:</p>
          <p>{data.descripcionAcabados}</p>
        </div>
      </div>
    </div>

    <div class="full-height">
      <!-- FABRICACION -->
      <div class="fabrication-container">
        <div class="column left">
          <img src={data.fotoProduccion1} alt="">
        </div>
        <div class="column right">
          <img src={data.fotoProduccion2} alt="">
        </div>
        <div class="column left">
          <img src={data.fotoProduccion3} alt="">
        </div>
        <div class="column right">
          <img src={data.fotoProduccion4} alt="">
        </div>
      </div>

      <!-- DETAILS -->
      <div class="text-container-full">
        <p class="mini-title">Detalles de producto</p>
        <p>{data.detallesProducto}</p>
      </div>
    </div>
    
    <div class="full-height">
      <!-- MONTAGE -->
      <div class="montage-container">
        <img src={data.fotoPrototipoON} alt="">
        <img src={data.fotoPrototipoOFF} alt="">
      </div>

      <!-- DETAILS 2 -->
      <div class="text-container-full">
        <p class="mini-title">Te va a gustar porque...</p>
        <p>{data.textoGusto}</p>
      </div>
    </div>

    <div class="full-height">
      <!-- FAMILY -->
      <div class="column">
        <img src={data.fotoFamilia} alt="">
      </div>

      <!-- PRICE -->
      <div class="text-container-full">
        <p>{data.precios}</p>
      </div>

      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/4JkIs37a2JE" title="" frameborder="0"  allowfullscreen></iframe>
      </div>
    </div>
    
  </div>
{/if}

<style>
  button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    background: lightgray;
  }

  img {
    width: 100%;
    object-fit: cover;
    /* border: red 1px solid; */
  }

  iframe {
    width: 100%;
    min-height: 40vw;
  }

  .blocks-container {
    padding: 20px;
    display: flex;
    flex-flow: column;
    gap: 40px;
  }

  .top-menu-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  ul {
    list-style-type: none;
    font-size: 14px;
    cursor: pointer;
  }

  li:hover {
    background: lightgray;
  }

  .full-height {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    gap: 15px;
    align-items: center;
  }

  .text-container-full {
    padding: 15px;
  }

  .mini-title {
    text-align: center;
    font-weight: bold;
  }

  .presentation {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 25px;
    border-bottom: 2px solid var(--stroke);
    padding-bottom: 15px;
  }

  .presentation .left {
    display: flex;
    flex-flow: column;
    justify-content: end;
  }

  .presentation .right {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .presentation h2 {
    padding: 0px;
    margin: 0px;
  }

  .column-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  .fabrication-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .fabrication-container > * {
    place-self: center;
  }

  .montage-container {
    margin: auto;
    width: 60%;
  }

  .video-container {
    width: 100%;
  }
</style>