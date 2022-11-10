<script>
  import { currentPage } from '../stores/store';
  export let data;
  export let i;

  function moveToPage() {
    $currentPage = +i+2;
  }
</script>

<a on:click={moveToPage} class="clean-link" href={`./gda/proyecto`}>
  <div  class="gallery-div">
    <div class="left">
      <img class="gallery-img no-select" alt={data.nombreFamilia} src={data.fotoPrototipo}/>
    </div>
    <div class="right">
      <h1 class="gallery-name">{data.nombreFamilia}</h1>
      <p class="gallery-description">{data.Subtitulo}</p>
    </div>
  </div>
</a>

<style>
  .gallery-div {
    box-sizing: border-box;
    display: grid;
    padding: 30px;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
    background: var(--fill);
    height: 100%;
  }

  .gallery-img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }

  .right {
    display: flex;
    flex-flow: column;
    justify-content: end;
  }

  .gallery-name {
    font-family: var(--headfont);
    font-size: 16px;
  }

  .gallery-description {
    font-size: 16px;
  }
</style>