<script>
  import GalleryElement from './GalleryElement.svelte';
  export let mainData;
</script>

{#if mainData}
  <div>
    <div class="gallery-container">
      <div class="gallery-title">
        <h1>¡ Mucha<br/>lámpara !</h1>
        <h2>COLECCIÓN 2022-2</h2>
        <h2>DISEÑO INDUSTRIAL UEB</h2>
      </div>
      {#each mainData as data, i (i) }
        <GalleryElement {data}/>
      {/each}
    </div>
  </div>
{/if}

<style>
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1px;
    background: var(--stroke);
  }

  .gallery-title {
    padding: 40px;
    background: var(--fill);
  }

  .gallery-title h1 {
    margin: 10px 0px;
    line-height : 35px;
    font-size: 36px;
  }

  .gallery-title h2 {
    margin: 0px;
    font-size: 16px;
  }
</style>