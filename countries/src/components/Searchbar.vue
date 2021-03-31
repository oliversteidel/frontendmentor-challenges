<template>
  <div class="wrapper">
    <div class="searchbar-wrapper flex ai-c">
      <i class="fas fa-search"></i>
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search for a country..."
        @keyup="showCountryNamesList"
      />
    </div>
    <ul class="result-list" v-if="userIsSearching">
      <li
        v-for="(element, index) in countryNames"
        :key="index"
        @click="[$emit('send-selected-country', element.name), hideSearchList()]"
      >
        {{ element.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: ["countryData"],
  data() {
    return {
      userIsSearching: false,
      countryNames: [],
    };
  },

  methods: {
    makeSuggest() {
      let userInput = document.getElementById("searchbar").value;
      let regex = new RegExp(userInput, "ig");
      let result = this.countryData.filter((el) => el.name.match(regex));
      console.log(result);
      return result;
    },
    showCountryNamesList() {
      this.countryNames = [];
      let list = this.makeSuggest();
      list.forEach((el) => {
        let obj = {
          name: el.name,
        };
        this.countryNames.push(obj);
      });
      this.userIsSearching = true;
    },
    hideSearchList() {
      this.userIsSearching = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.wrapper {
  width: 100%;
}

.searchbar-wrapper {
  width: 100%;
  max-width: 30rem;
  height: 3.625rem;
  margin-top: 1.5rem;
  padding: 0 1.875rem;
  background: $elements-dark;
  border-radius: 5px;
  box-shadow: $shadow;
  position: relative;

  .fas {
    color: $text-dark;
  }

  input {
    border: none;
    background: transparent;
    color: $text-dark;
    font-family: inherit;
    margin-left: 1.625rem;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    opacity: 1;
  }
}

.result-list {
  position: absolute;
  left: 1rem;
  right: 1rem;
  padding: 1rem 1.875rem;
  margin-top: 4px;
  color: $text-dark;
  background: $elements-dark;
  font-family: inherit;
  font-size: 0.875rem;
  border-radius: 5px;
  z-index: 100;
}
</style>

