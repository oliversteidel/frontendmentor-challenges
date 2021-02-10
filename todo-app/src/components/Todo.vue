<template>
  <div class="wrapper">
    <button
      class="btn btn--circle"
      v-bind:class="[todo.completed ? checked : unchecked]"
      @click="markComplete"
    >
      <img src="../assets/icon-check.svg" alt="" />
    </button>
    <p class="todo-text"
        v-bind:class="{ 'is-complete': todo.completed}"
    >{{ todo.title }}</p>
    <button class="btn btn--cross" @click="$emit('delete-todo', todo.id)">
      <img src="../assets/icon-cross.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      checked: "checked",
      unchecked: "unchecked",
    };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }    
  }
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
}

.checked {
  background: $checkBackground;
  opacity: 1;
}

.btn--circle:hover {
  opacity: 1;
  background: $checkBackground;
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
}

.todo-text {
  width: 90%;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: $ltVeryDarkGrayishBlue;
  
}

.is-complete {    
  text-decoration: line-through;
}

.btn--cross {
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0.4;

  

  img {
    width: 100%;
    height: auto;
  }
}

.wrapper:hover .btn--cross {
  opacity: 0.4;
}
</style>