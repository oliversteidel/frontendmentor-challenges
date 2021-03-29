<template>
  <div id="app">
    <header class="header flex ai-c jc-sb">
      <h1 class="header__title">Where in the world?</h1>
      <div class="header__theme-switch-wrapper flex ai-c">
        <img src="./assets/icon-sun.svg" alt="" class="header__icon">
        <p class="header__theme-text">Light Mode</p>
      </div>
    </header>
    <div class="container">
      <Searchbar />
    </div>
    
  </div>
</template>

<script>
import Searchbar from "./components/Searchbar.vue";
export default {
  
  name: "App",
  components: {
    Searchbar
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";

#app {
  background: $bg-dark;
  height: 100vh;  
}

.header {
  width: 100%;
  max-width: 90rem;
  height: 5rem;
  padding: 0 1rem; 
  background: $elements-dark;
  box-shadow: 0 0 15px rgba(black, 0.1);

  &__title {
    font-size: 0.875rem;
    font-weight: $extra-bold;
    color: $text-dark;
  }

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  &__theme-text {
    font-size: 0.875rem;
    font-weight: $semi-bold;
    color: $text-dark;
    margin-left: 0.75rem;
  }
}

.container {
  padding: 0 1rem;
}
</style>
