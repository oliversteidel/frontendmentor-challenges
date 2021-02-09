<template>
  <div id="app">
    <div class="container light-bg">
      <Header />
      <AddTodo />
    </div>
    
    
  </div>
</template>

<script>
import Header from './components/Header';
import AddTodo from './components/AddTodo';


export default {
  name: 'App',
  components: {
    Header,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  }
  
}
</script>

<style lang="scss">
  @import "./styles/_variables.scss";


  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Josefin Sans', sans-serif;
  }

  .container {
    width: 100vw;
    height: 100vh;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100% 200px;

  }

  .light-bg {
    background-image: url('./assets/bg-mobile-light.jpg');
    background-color: $ltVeryLightGrayishBlue;
  }


</style>
