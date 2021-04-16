<template>
  <div class="wrapper">
    <div
      class="searchbar-wrapper flex ai-c"
      @click="hideSearchList"
      :class="{ 'input-light': !darkmode }"
    >
      <i class="fas fa-search"></i>
      <input
        type="search"
        id="searchbar"
        placeholder="Search for a country..."
        @keyup="showCountryNamesList"
      />
    </div>
    <ul
      class="result-list"
      v-if="userIsSearching"
      :class="{ 'input-light': !darkmode }"
    >
      <li
        class="result-list__item"
        v-for="(element, index) in countryNames"
        :key="index"
        @click="
          [$emit('send-selected-country', element.name), hideSearchList()]
        "
      >
        {{ element.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: ["countryData", "darkmode"],
  data() {
    return {
      userIsSearching: false,
      countryNames: [],
    };
  },

  methods: {
    //on keyup userinput in searchbar is converted in Regex, which compares dataset of countrynames
    makeSuggest() {
      let userInput = document.getElementById("searchbar").value;
      let regex = new RegExp(userInput, "ig");
      let result = this.countryData.filter((el) => el.name.match(regex));
      return result;
    },
    //creates list below searchbar of matching userinput with countrynames
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
  max-width: 30rem;
  position: relative;
}

.searchbar-wrapper {
  width: 100%;
  height: 3.625rem;
  margin-top: 1.5rem;
  padding: 0 1.875rem;
  background: $elements-dark;
  color: $text-dark;
  border-radius: 5px;
  box-shadow: $shadow;
  position: relative;

  @include breakpoint-up($medium) {
    margin-top: 3rem;
  }

  .fas {
    color: inherit;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    color: inherit;
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
  max-width: 30rem;
  left: 0;
  right: 0;
  padding: 1rem 0;
  margin-top: 4px;
  color: $text-dark;
  background: $elements-dark;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 2em;
  border-radius: 5px;
  box-shadow: $shadow;
  z-index: 100;
  overflow: hidden;
}

.result-list__item {
  padding: 0 1.5rem;
  background: inherit;
  color: inherit;
  cursor: pointer;
}

.result-list__item:hover {
  background: $elements-dark-hover;
}
</style>

