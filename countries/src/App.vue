<template>
  <div id="app">
    <TheHeader :darkmode="darkmode" v-on:switch-theme="switchTheme" />

    <div class="container flex-col ai-c" v-if="!showCountryDetail">
      <div class="wrapper-search-and-filter flex jc-sb">
        <Searchbar
          :countryData="countryData"
          v-on:send-selected-country="getCountryByName"
        />
        <Filterbar
          :regions="regions"
          v-on:send-selected-region="getCountriesByRegion"
        />
      </div>
      <div class="cards-container flex-col">
        <CountryCard
          v-for="country in countries"
          :key="country.name"
          :country="country"
          v-on:country-selected="setSelectedCountry"
        />
      </div>
      <p class="error-message" v-if="!requestSuccessful">{{ errorMessage }}</p>
    </div>
    <TheCountryDetail
      :countryData="countryData"
      :selectedCountry="selectedCountry"
      v-if="showCountryDetail"
      v-on:close-country-detail="showCountryDetail = false"
    />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import Filterbar from "./components/Filterbar.vue";
import Searchbar from "./components/Searchbar.vue";
import CountryCard from "./components/CountryCard.vue";
import TheCountryDetail from "./components/TheCountryDetail.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    Searchbar,
    Filterbar,
    CountryCard,
    TheCountryDetail,
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
      selectedCountry: [],
      errorMessage: "",
      showCountryDetail: false,
    };
  },
  methods: {
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
    setSelectedCountry(name) {
      console.log(name);
      this.countryData.forEach((el, index) => {
        if (el.name === name) {
          this.selectedCountry = this.countryData[index];
        }
      });
      this.showCountryDetail = true;
    },
    switchTheme() {
      this.darkmode = !this.darkmode;
    },
  },
  beforeMount() {
    this.getApiData();
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";
#app {
  margin: 0 auto;
  padding-top: 5rem;
}

.container {
  padding: 0 1rem;
  background: $bg-dark;

  @include breakpoint-up($flex-wrap-enabled) {
    padding: 0 5rem;
  }

  .wrapper-search-and-filter {
    width: 100%;
    max-width: 80rem;
    margin-bottom: 2rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .cards-container {
    max-width: 80.5rem;
    align-items: center;
    
    @include breakpoint-up($flex-wrap-enabled) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4.625rem;
    }
  }
}
</style>
