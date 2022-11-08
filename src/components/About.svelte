

<div class="about-container">
  <div class="top-menu-container">
    <a href="./proyectos"><button><img src="assets/home-01.png" alt="home"/></button></a>
  </div>
  
  <div class="title">
    <h1>Acerca de...</h1>
    <p>fdsdfsdf</p>
  </div>

  <div class="about-text">
    <div class="left">
      <h2>Gestión de artesanías</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum neque eget malesuada mollis. Nunc eu elit vitae elit viverra scelerisque et a lorem. Nam quis pellentesque ex. Pellentesque euismod, ipsum sed ultrices sollicitudin, massa dolor pulvinar orci, in congue massa odio quis urna. Proin vitae lorem orci. Cras lacinia blandit ex, et tristique libero feugiat ac. 
        Sed id orci eros. Praesent mollis lorem id ornare facilisis. Curabitur porttitor neque velit, a volutpat metus ultricies ut. Quisque ut metus quis diam vulputate viverra. Proin ligula justo, commodo sit amet felis at, convallis volutpat erat. Fusce id ultrices turpis.
      </p>
    </div>
    <div></div>
  </div>
</div>

<style>
  button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 5px;
  }

  img {
    width: 100%;
  }

  .about-container {
    padding: 15px;
  }

  .title {
    padding: 110px 0px 0px 0px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 35px;
    align-items: end;
    border-bottom: solid 1px var(--stroke);
  }

  h1 {
    margin: 0px;
    padding: 0px;
    font-size: 50px;
  }

  .title p {
    padding: 20px;
    margin: 0px;
  }

  .about-text {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 35px;
  }

  .about-text .left {
    border-right: solid 1px var(--stroke);
    padding: 0px 20px 0px 10px;
  }
</style>