<template>
  <div class="input-container light">
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
  max-width: 540px;
  padding: 1.25rem;
  margin-top: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.light {
  background: white;
}

.circle {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid $ltDarkGrayishBlue;
  margin-right: 0.75rem;
  opacity: 0.5;
}

input[type="text"] {
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  color: $ltDarkGrayishBlue;
}
</style>