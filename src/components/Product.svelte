<script>
  export let description;
  export let image;
  export let blueprint;
</script>

<!-- PRODUCTO 2 -->
<div class="product-container">
  <div class="column-container">
    <div class="column left">
      <img src={image} alt="">
    </div>
    <div class="column right">
      <img src={blueprint} alt="">
    </div>
  </div>
  <div class="text-container-full">
    <p>{description}</p>
  </div>
</div>

<style>
  img {
    width: 100%;
    object-fit: cover;
  }

  .column-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin: auto;
  }

  .column-container > * {
    place-self: center;
  }
</style>