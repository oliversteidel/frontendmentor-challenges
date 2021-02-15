<template>
  <div class="wrapper">
    <button
      class="btn btn--circle"
      :class="[
        todo.completed ? checked : unchecked,
        { darkTask: darkmode && !todo.completed },
      ]"
      @click="[markComplete(), $emit('save-todo')]"
    >
      <img src="../assets/icon-check.svg" alt="" />
    </button>
    <p
      class="todo-text"
      v-bind:class="{ 'is-complete': todo.completed, darkText: darkmode }"
    >
      {{ todo.title }}
    </p>
    <button class="btn btn--cross" @click="$emit('delete-todo', todo.id)">
      <img src="../assets/icon-cross.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo", "darkmode"],
  data() {
    return {
      checked: "checked",
      unchecked: "unchecked",
    };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.btn--circle {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: $ltDarkGrayishBlue;
  opacity: 0.5;
  position: relative;
  flex-shrink: 0;
  transition: all 0.3s ease-in;

  @media screen and (min-width: $breakpoint) {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.btn--circle:focus {
  outline: none;
}

.btn--circle:hover {
  opacity: 1;
  background: $checkBackground;
}

.checked {
  background: $checkBackground;
  opacity: 1;
}

.unchecked::after {
  content: "";
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: white;
  top: 1px;
  left: 1px;
  transition: background-color 0.2s ease-in;

  @media screen and (min-width: $breakpoint) {
    width: 1.375rem;
    height: 1.375rem;
  }
}

// btn--circle darkmode style

.darkTask {
  background: $ltDarkGrayishBlue;
  //opacity: 1;
}

.darkTask::after {
  content: "";
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: $dtVeryDarkDesaturatedBlue;
  top: 1px;
  left: 1px;
  transition: background-color 0.2s ease-in;

  @media screen and (min-width: $breakpoint) {
    width: 1.375rem;
    height: 1.375rem;
  }
}

.todo-text {
  width: 90%;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: $ltVeryDarkGrayishBlue;
  transition: color 0.2s ease-in;

  @media screen and (min-width: $breakpoint) {
    font-size: 1.0625rem;
  }
}

.darkText {
  color: $dtLightGrayishBlue;
}

.is-complete {
  text-decoration: line-through;
  color: $ltVeryDarkGrayishBlue;
}

.btn--cross {
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0.8;
  transition: opacity 0.3s ease-in;

  @media screen and (min-width: $breakpoint) {
    width: 1.125rem;
    height: 1.125rem;
    opacity: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.wrapper:hover .btn--cross {
  opacity: 0.4;
}
</style>