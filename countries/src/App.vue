<template>
  <div id="app">
    <header class="header flex ai-c jc-sb">
      <h1 class="header__title">Where in the world?</h1>
      <div class="header__theme-switch-wrapper flex ai-c" @click="switchTheme">
        <img
          src="./assets/icon-sun.svg"
          alt=""
          class="header__icon"
          v-if="darkmode"
        />
        <img
          src="./assets/icon-moon.svg"
          alt=""
          class="header__icon"
          v-if="!darkmode"
        />
        <p class="header__theme-text" v-if="darkmode">Light Mode</p>
        <p class="header__theme-text" v-if="!darkmode">Dark Mode</p>
      </div>
    </header>
    <div class="container flex-col ai-c">
      <Searchbar
        :countryData="countryData"
        v-on:send-selected-country="getCountryByName"
      />
      <Filterbar
        :regions="regions"
        v-on:send-selected-region="getCountriesByRegion"
      />
      <CountryCard
        v-for="country in countries"
        :key="country.name"
        :country="country"
      />
      <p class="error-message" v-if="!requestSuccessful">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import Filterbar from "./components/Filterbar.vue";
import Searchbar from "./components/Searchbar.vue";
import CountryCard from "./components/CountryCard.vue";
export default {
  name: "App",
  components: {
    Searchbar,
    Filterbar,
    CountryCard,
  },
  data() {
    return {
      darkmode: true,
      requestSuccessful: true,
      apiUrl: "https://restcountries.eu/rest/v2/all",
      regions: [
        { value: "Africa" },
        { value: "Americas" },
        { value: "Asia" },
        { value: "Europe" },
        { value: "Oceania" },
        { value: "show all" },
      ],
      countryData: [],
      countries: [],

      errorMessage: "",
    };
  },
  methods: {
    switchTheme() {
      this.darkmode = !this.darkmode;
    },
    getApiData: async function () {
      try {
        const response = await fetch(this.apiUrl);
        this.countryData = await response.json();
        this.countries = await this.countryData;
        console.log("apirequest successful");
      } catch (error) {
        this.errorMessage = error;
        this.requestSuccessful = false;
      }
    },
    getCountriesByRegion: async function (region) {
      if (region === "show all") {
        this.getApiData();
      } else {
        try {
          const response = await fetch(
            `https://restcountries.eu/rest/v2/region/${region}`
          );
          this.countries = await response.json();
        } catch (error) {
          this.errorMessage = error;
          this.requestSuccessful = false;
        }
      }
    },
    getCountryByName: async function (name) {
      try {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        );
        this.countries = await response.json();
      } catch (error) {
        this.errorMessage = error;
        this.requestSuccessful = false;
      }
    },
  },
  beforeMount() {
    this.getApiData();
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";

.header {
  width: 100%;
  max-width: 90rem;
  height: 5rem;
  padding: 0 1rem;
  background: $elements-dark;
  box-shadow: $shadow;

  &__title {
    font-size: 0.875rem;
    font-weight: $extra-bold;
    color: $text-dark;
  }

  &__theme-switch-wrapper {
    cursor: pointer;
  }

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  &__theme-text {
    font-size: 0.8125rem;
    font-weight: $semi-bold;
    color: $text-dark;
    margin-left: 0.75rem;
  }
}

.container {
  padding: 0 1rem;
  background: $bg-dark;
}
</style>
