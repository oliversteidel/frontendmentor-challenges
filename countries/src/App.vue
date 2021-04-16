<template>
  <div id="app" :class="{ 'bg-light': !darkmode }">
    <TheHeader
      :darkmode="darkmode"
      v-on:switch-theme="switchTheme"
      :class="{ 'elem-light': !darkmode }"
    />

    <div
      class="container flex-col ai-c"
      v-if="!showCountryDetail"      
    >
      <div class="wrapper-search-and-filter flex jc-sb">
        <Searchbar
          :darkmode="darkmode"
          :countryData="countryData"
          v-on:send-selected-country="getCountryByName"
        />
        <Filterbar
          :darkmode="darkmode"
          :regions="regions"
          v-on:send-selected-region="getCountriesByRegion"
        />
      </div>
      <div class="cards-container flex-col">
        <CountryCard
          v-for="country in countries"
          :key="country.name"
          :country="country"
          :darkmode="darkmode"
          v-on:country-selected="setSelectedCountry"
        />
      </div>
      <p class="error-message" v-if="!requestSuccessful">{{ errorMessage }}</p>
    </div>
    <transition name="fade">
      <TheCountryDetail
        :darkmode="darkmode"
        :countryData="countryData"
        :selectedCountry="selectedCountry"
        v-if="showCountryDetail"
        v-on:close-country-detail="showCountryDetail = false"
        v-on:country-selected="setSelectedCountry"
      />
    </transition>
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
      errorMessage: "Can't get data from the Database, please check your network connection an try again later.",
      showCountryDetail: false,
    };
  },
  methods: {
    getApiData: async function () {
      try {
        const response = await fetch(this.apiUrl);
        this.countryData = await response.json();
        this.countries = await this.countryData;        
      } catch (error) {        
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
        this.requestSuccessful = false;
      }
    },
    setSelectedCountry(name) {
      this.countryData.forEach((el, index) => {
        if (el.name === name) {
          this.selectedCountry = this.countryData[index];
        }
      });
      this.showCountryDetail = true;
    },
    switchTheme() {
      this.darkmode = !this.darkmode;
      if (!this.darkmode) {
        document.querySelector("body").style.backgroundColor = "$bg-light";
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
#app {
  margin: 0 auto;
  padding-top: 5rem;
  background: $bg-dark;
  transition: background .5s ease-out;
}

.container {
  padding: 0 1rem;


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

.error-message {
  font-size: 1rem;
  color: $text-dark;
  width: 100%;
  max-width: 40ch;

  @include breakpoint-up($large) {
    font-size: 2rem;
  }
}

.fade-enter-active, .fade-leave-active {
    transition: transform .5s ease-in, opacity .5s ease-in;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(10rem);
  }
</style>
