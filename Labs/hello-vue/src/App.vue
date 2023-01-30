
<template>
  <div id="app">
    <header>
      <img src="./img/Ironhack_logo.png" alt="ironhack-logo">
      <img src="./img/Burger_menu.png" alt="Hamburger Menu">
    </header>
    <section class="position-vue">
      <img src="./img/Vue_logo.png" alt="vue-logo">
      <h1>Welcome to Vue.js</h1>
      <h3>Become a coding ninja with the fastest - <br> growing JavaScript framework</h3>
      <button>Awesome!</button>
    </section>
    <section class="greenSection">
      <article>
        <img src="./img/USP-1.png" alt="icon1">
        <h2>Performant</h2>
        <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
      </article>
      <article>
        <img src="./img/USP-2.png" alt="icon2">
        <h2>Approachable</h2>
        <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
      </article>
      <article>
        <img src="./img/USP-3.png" alt="icon3">
        <h2>Versatile</h2>
        <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
      </article>
    </section>
  </div>
</template>

<script setup>
 /*  export default {
    name: 'App',
  } */
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-around;
  max-width: 10vw;
  max-height: 10vw;
  margin: 1em 0;
  
}
  .position-vue{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .position-vue h1{
    font-size: 60px;
    margin: 0;
  }
  h3{
    text-align: center;
  }
  button{
    background-color:#34495E;
    width: 8em;
    height: 2em;
    border: none;
    border-radius: 14px;
    font-size: 20px;
    color: #fff;
  }
  .greenSection{
    background-color:#39B983;
    width: 100vw;
    height: 22em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3em;
  }
  .greenSection article{
    width: 14em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p{
    padding-left: 1em;
    text-align: center;
  }
</style>