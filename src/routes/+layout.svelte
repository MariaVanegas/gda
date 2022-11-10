<script>
  export const prerender = true;
</script>

<svelte:head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap');
  </style>
</svelte:head>

<div class="general">
  <slot></slot>
</div>

<style>
  :global(:root) {
    --stroke: rgb(60, 75, 81);
    --fill: #ffffff;
    color: var(--stroke);
    font-family: 'Nunito Sans', sans-serif;
  }

  .general {
    max-width: 800px;
    margin: auto;
    border: solid 15px var(--stroke);
    background: var(--fill);
  }

  :global(body) {
    box-sizing: content-box;
    padding: 0px;
    margin: 0px;
  }

  :global(.no-select)  {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(.clean-link) {
    all: unset;
  }

  :global(.header) {
    text-align: center;
  }

  /* @media screen and (max-device-width: 450px) {
    .general {
      grid-auto-flow: row;
      grid-template-columns: auto;
    }
  } */
</style>