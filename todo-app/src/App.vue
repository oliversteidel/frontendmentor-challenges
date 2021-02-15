<template>
  <div id="app">
    <div class="container" :class="{ darkBg: darkmode }">
      <Header
        v-on:change-light-theme="changeLightTheme"
        v-bind:btnImg="btnImg"
      />
      <AddTodo v-on:add-todo="addTodo" v-bind:darkmode="darkmode" />
      <TodoList
        v-bind:todos="todos"
        v-bind:todosLeft="todosLeft"
        v-bind:darkmode="darkmode"
        v-on:delete-todo="deleteTodo"
        v-on:clear-completed="clearCompleted"
        v-on:show-active="showActiveTodos"
        v-on:show-completed="showCompletedTodos"
        v-on:show-all="showAllTodos"
        v-on:save-todos="saveTodos"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// to change images in Header -> button -> img src, import them that webpack can deal with the proper path
import imgMoon from "./assets/icon-moon.svg";
import imgSun from "./assets/icon-sun.svg";

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
      todosCopy: [],
      darkmode: false,
    };
  },
  mounted() {
    this.loadTodos();
  },
  computed: {
    todosLeft: function () {
      return this.todosCopy.filter((el) => el.completed === false).length;
    },
    btnImg: function () {
      if (this.darkmode) {
        return imgSun;
      } else {
        return imgMoon;
      }
    },
  },
  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
      this.todosCopy = this.todos;
      this.saveTodos();
    },
    deleteTodo(id) {
      this.todosCopy = this.todosCopy.filter((todo) => todo.id !== id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.saveTodos();
    },
    clearCompleted() {
      this.todos = this.todosCopy.filter((todo) => !todo.completed);
      this.todosCopy = this.todos;
      this.saveTodos();
    },
    showActiveTodos() {
      this.todos = this.todosCopy.filter((todo) => !todo.completed);
    },
    showCompletedTodos() {
      this.todos = this.todosCopy.filter((todo) => todo.completed);
    },
    showAllTodos() {
      this.todos = this.todosCopy;
    },
    saveTodos() {
      let parsed = JSON.stringify(this.todosCopy);
      localStorage.setItem("todoList", parsed);
    },
    loadTodos() {
      if (localStorage.getItem("todoList")) {
        try {
          this.todos = JSON.parse(localStorage.getItem("todoList"));
        } catch (error) {
          console.log(error);
        }
        this.todosCopy = this.todos;
      }
    },
    changeLightTheme() {
      this.darkmode = !this.darkmode;
    },
  },
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

*:focus {
  outline: none;
}

html {
  font-family: "Josefin Sans", sans-serif;
}

ul {
  width: 100%;
  max-width: $maxwidth;
  margin-top: 1rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  @media screen and (min-width: $breakpoint) {
    margin-top: 1.5rem;
  }
}

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  background: white;
  transition: background-color 0.2s ease-in;
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
  background-image: url("./assets/bg-mobile-light.jpg");
  background-color: $ltVeryLightGrayishBlue;
  transition: background-color 0.2s ease-in;

  @media screen and (min-width: 24rem) {
    background-image: url("./assets/bg-desktop-light.jpg");
    background-size: unset;
  }
}

.darkBg {
  background-image: url("./assets/bg-mobile-dark.jpg");
  background-color: $dtVeryDarkBlue;

  @media screen and (min-width: 24rem) {
    background-image: url("./assets/bg-desktop-dark.jpg");
    background-size: unset;
  }
}

.darkTask {
  background: $dtVeryDarkDesaturatedBlue;
}

.darkTask + .darkTask {
  border-top: 1px solid $dtVeryDarkGrayishBlue;
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
  max-width: $maxwidth;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: $breakpoint) {
    height: 4rem;
  }
}
</style>
