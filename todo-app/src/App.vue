<template>
  <div id="app">
    <div class="container light-bg">
      <Header />
      <AddTodo v-on:add-todo="addTodo" />
      <TodoList v-bind:todos="todos" v-bind:todosLeft="todosLeft" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    Header,
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    todosLeft: function () {
      return this.todos.filter((el) => el.completed === false).length;
    },
  },
  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
};
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
  font-family: "Josefin Sans", sans-serif;
}

ul {
  width: 100%;
  max-width: 540px;
  margin-top: 1rem;
  border-radius: 5px;
  overflow: hidden;
}

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

li + li {
  border-top: 1px solid $ltLightGrayishBlue;
}

.container {
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-position: top left;
}

.light-bg {
  background-image: url("./assets/bg-mobile-light.jpg");
  background-color: $ltVeryLightGrayishBlue;

  @media screen and (min-width: 24rem) {
    background-image: url("./assets/bg-desktop-light.jpg");
    background-size: unset;
  }
}

.btn {
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.875rem;
  color: $ltDarkGrayishBlue;
  cursor: pointer;
  transition: color 0.2s ease-in;
}

.btn:hover {
  color: $ltVeryDarkGrayishBlue;
}

.wrapper {
  width: 100%;
  height: 3rem;
  max-width: 540px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
}
</style>
