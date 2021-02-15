<template>
  <div class="input-container" :class="{ darkTask: darkmode }">
    <div class="circle"></div>
    <input
      id="addtodo"
      @keyup.enter="addTodo"
      v-model="title"
      type="text"
      placeholder="Create a new todo..."
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"; //tool which generates unique id's. (install: npm install uuid)
export default {
  name: "AddTodo",
  props: ["darkmode"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo() {
      const inputTodo = document.getElementById("addtodo");
      if (inputTodo.value) {
        const newTodo = {
          id: uuidv4(),
          title: this.title,
          completed: false,
        };

        //send up to parent
        this.$emit("add-todo", newTodo);

        //clear input after submiting
        this.title = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.input-container {
  width: 100%;
  height: 3rem;
  max-width: $maxwidth;
  padding: 1.25rem;
  margin-top: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: white;
  transition: background-color 0.2s ease-in;

  @media screen and (min-width: $breakpoint) {
    height: 4rem;
    margin-top: 3.125rem;
  }
}

.circle {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid $ltDarkGrayishBlue;
  margin-right: 0.75rem;
  opacity: 0.5;
  flex-shrink: 0;

  @media screen and (min-width: $breakpoint) {
    width: 1.375rem;
    height: 1.375rem;
  }
}

input[type="text"] {
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  color: $ltDarkGrayishBlue;

  @media screen and (min-width: $breakpoint) {
    font-size: 1.0625rem;
  }
}

.darkTask {
  background: $dtVeryDarkDesaturatedBlue;
}
</style>