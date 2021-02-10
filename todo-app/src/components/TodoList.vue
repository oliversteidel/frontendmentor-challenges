<template>
  <ul>
    <li :key="todo.id" v-for="todo in todos">
      <Todo v-bind:todo="todo" />
    </li>
    <li class="wrapper">
      <div class="items-left">
        <p>{{ todosLeft }} items left</p>
      </div>
      <div class="filter-btns">
        <button class="btn btn--filter">All</button>
        <button class="btn btn--filter">Active</button>
        <button class="btn btn--filter">Completed</button>
      </div>
      <button class="btn btn--clear">Clear Completed</button>
    </li>
    <li class="mobile-filter-btns wrapper">
      <button class="btn btn--filter">All</button>
      <button class="btn btn--filter">Active</button>
      <button class="btn btn--filter">Completed</button>
    </li>
  </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  props: ["todos", "todosLeft"],
};
</script>

<style lang="scss" scoped>

.wrapper {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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

.btn--filter + .btn--filter {
  margin-left: 1em;
}

.mobile-filter-btns {
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  justify-content: center;

  @media screen and (min-width: 30rem) {
    display: none;
  }
}
</style>