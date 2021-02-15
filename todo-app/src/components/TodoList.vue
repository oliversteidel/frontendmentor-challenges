<template>
  <ul>
    <li :key="todo.id" v-for="todo in todos" :class="{ darkTask: darkmode }">
      <Todo
        v-bind:todo="todo"
        v-bind:darkmode="darkmode"
        v-on:delete-todo="$emit('delete-todo', todo.id)"
        v-on:save-todo="$emit('save-todos')"
      />
    </li>
    <li class="wrapper btn-container" :class="{ darkTask: darkmode }">
      <div class="items-left">
        <p>{{ todosLeft }} items left</p>
      </div>
      <div class="filter-btns">
        <button
          class="btn btn--filter"
          @click="[$emit('show-all'), markAllClicked()]"
          :class="{ clicked: allClicked, darkHover: darkmode }"
        >
          All
        </button>
        <button
          class="btn btn--filter"
          @click="[$emit('show-active'), markActiveClicked()]"
          :class="{ clicked: activeClicked, darkHover: darkmode }"
        >
          Active
        </button>
        <button
          class="btn btn--filter"
          @click="[$emit('show-completed'), markCompletedClicked()]"
          :class="{ clicked: completedClicked, darkHover: darkmode }"
        >
          Completed
        </button>
      </div>
      <button
        class="btn btn--clear"
        @click="$emit('clear-completed')"
        :class="{ darkHover: darkmode }"
      >
        Clear Completed
      </button>
    </li>

    <li class="mobile-filter-btns wrapper"
    :class="{ darkTask: darkmode }">
      <button
        class="btn btn--filter"
        @click="[$emit('show-all'), markAllClicked()]"
        :class="{ clicked: allClicked }"
      >
        All
      </button>
      <button
        class="btn btn--filter"
        @click="[$emit('show-active'), markActiveClicked()]"
        :class="{ clicked: activeClicked }"
      >
        Active
      </button>
      <button
        class="btn btn--filter"
        @click="[$emit('show-completed'), markCompletedClicked()]"
        :class="{ clicked: completedClicked }"
      >
        Completed
      </button>
    </li>
  </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",

  data() {
    return {
      allClicked: true,
      activeClicked: false,
      completedClicked: false,
    };
  },
  components: {
    Todo,
  },
  props: ["todos", "todosLeft", "showActive", "showComleted", "darkmode"],
  methods: {
    markAllClicked() {
      this.allClicked = !this.allClicked;
      this.activeClicked = false;
      this.completedClicked = false;
    },
    markActiveClicked() {
      this.activeClicked = !this.activeClicked;
      this.allClicked = false;
      this.completedClicked = false;
    },
    markCompletedClicked() {
      this.completedClicked = !this.completedClicked;
      this.activeClicked = false;
      this.allClicked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
li:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.btn-container {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
}

p {
  font-size: 0.875rem;
  color: $ltDarkGrayishBlue;
}

.filter-btns {
  display: none;
  
  @media screen and (min-width: 30rem) {
    display: block;
  }
}

.btn--filter:hover {
  color: $ltVeryDarkGrayishBlue;
}

.darkHover:hover {
  color: $dtLightGrayishBlue;
}

.btn--filter + .btn--filter {
  margin-left: 1em;
}

.clicked {
  color: $brightBlue;
  outline: none;
}

.mobile-filter-btns {
  border: none !important;
  border-radius: 5px;
  margin-top: 1rem;
  justify-content: center;
  
  @media screen and (min-width: 30rem) {
    display: none;
  }
}
</style>