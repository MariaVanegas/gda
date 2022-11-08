<script>
  import { lang } from '../stores/store';
  function changeLanguage(l) { $lang = l }
</script>

<div class="language-selector-container">

  <div class="language-prompt-container no-select">
    <a class="clean-link" on:click={() => changeLanguage('Español')} href="./proyectos">
      <h1>En Español</h1>
      <h2>Visita la tienda virtual</h2>
    </a>
  </div>

  <div class="language-prompt-container no-select">
    <a class="clean-link" on:click={() => changeLanguage('English')} href="./proyectos">
      <h1>In English</h1>
      <h2>Visit the virtual store</h2>
    </a>
  </div>

</div>

<style>
  .language-selector-container {
    padding: 30px;
    display: flex;
    align-items: center;
    grid-gap: 20px;
    flex-flow: column;
    text-align: center;
  }

  .language-prompt-container {
    padding: 15px;
    cursor: pointer;
  }

  .language-prompt-container:hover {
    background: lightgray;
  }
</style>