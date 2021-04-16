<template>
  <div class="wrapper flex-col ai-c" :class="{ 'elem-light': !darkmode }">
    <div class="btn-container">
      <button
        class="btn btn--back flex ai-c jc-c"
        @click="$emit('close-country-detail')"
        :class="{ 'elem-light': !darkmode }"
      >
        <img
          src="../assets/arrow-back-outline.svg"
          alt=""
          class="arrow-img"
          v-if="darkmode"
        />
        <img
          src="../assets/arrow-back-outline-dark.svg"
          alt=""
          class="arrow-img"
          v-if="!darkmode"
        />
        <p>Back</p>
      </button>
    </div>
    <div class="country">
      <div class="country__flag-container">
        <img :src="selectedCountry.flag" alt="" class="country__flag" />
      </div>
      <div class="country__info-container">
        <h2 class="country__name">{{ selectedCountry.name }}</h2>
        <div class="country__info-wrapper">
          <div class="country__info-wrapper-one">
            <p class="country__info">
              Native Name:&nbsp;<span>{{ selectedCountry.nativeName }}</span>
            </p>
            <p class="country__info">
              Population:&nbsp;<span>{{ population }}</span>
            </p>
            <p class="country__info">
              Region:&nbsp;<span>{{ selectedCountry.region }}</span>
            </p>
            <p class="country__info">
              Sub Region:&nbsp;<span>{{ selectedCountry.subregion }}</span>
            </p>
            <p class="country__info">
              Capital:&nbsp;<span>{{ selectedCountry.capital }}</span>
            </p>
          </div>
          <div class="country__info-wrapper-two">
            <p class="country__info country__info-domain">
              Top Level Domain:&nbsp;.<span>{{
                selectedCountry.alpha2Code
              }}</span>
            </p>
            <p class="country__info">
              Currencies:&nbsp;<span>{{ currencies }}</span>
            </p>
            <p class="country__info">
              Languages:&nbsp;<span>{{ languages }}</span>
            </p>
          </div>
        </div>
        <div class="country__border-countries-wrapper">
          <div class="country__border-countries">
            <h3>Border Countries:</h3>
          </div>
          <div class="country__border-countries-btns flex">
            <BorderCountryButton
              :darkmode="darkmode"
              v-for="borderCountry in borderCountries"
              :key="borderCountry"
              :borderCountry="borderCountry"
              v-on:country-selected="$emit('country-selected', borderCountry)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>            

<script>
import BorderCountryButton from "./BorderCountryButton.vue";
export default {
  name: "TheCountryDetail",
  props: ["selectedCountry", "countryData", "darkmode"],
  components: {
    BorderCountryButton,
  },
  computed: {
    //bordercountries are stored as 3 letter countrycodes, which is the alpha3Code.
    //To get the readable name, this function compares alpha3codes and returns the name of matching country
    borderCountries() {
      let temp = [];
      this.selectedCountry.borders.forEach((el) => {
        this.countryData.forEach((country) => {
          if (el === country.alpha3Code) {
            temp.push(country.name);
          }
        });
      });
      return temp;
    },
    languages() {
      let temp = "";
      this.selectedCountry.languages.forEach((el) => {
        temp = temp.concat(` ${el.name},`);
      });
      return temp.slice(1, -1);
    },
    currencies() {
      let temp = "";
      this.selectedCountry.currencies.forEach((el) => {
        temp = temp.concat(` ${el.name},`);
      });
      return temp.slice(1, -1);
    },
    //for better readability this function converts the population number in a comma seperated string
    population() {
      if (this.selectedCountry.population > 999) {
        let populationString = this.selectedCountry.population.toString();
        let arr = [...populationString];
        let population = "";
        let counter = Math.floor(arr.length / 3);
        let index = [-3, -7, -11];
        for (let i = 0; i < counter; i++) {
          arr.splice(index[i], 0, ",");
        }
        if (arr[0] === ",") {
          arr.shift();
        }
        arr.forEach((el) => {
          population = population.concat(el);
        });
        return population;
      } else {
        return this.selectedCountry.population;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.wrapper {
  width: 100vw;
  max-width: 90rem;
  min-height: 100vh;
  padding: 0 1rem;
  margin: 0 auto;
  background: $bg-dark;
  color: $text-dark;

  @include breakpoint-up($medium) {
    padding: 0 5rem;
  }
}

.btn-container {
  width: 100%;

  .btn--back {
    max-width: 6.5rem;
    margin: 7.5rem 0 4rem 0;

    .arrow-img {
      height: 50%;
      width: auto;
    }

    p {
      margin: 2px 0 0 10px;
    }
  }
}

.country {
  @include breakpoint-up($large) {
    display: flex;
  }

  &__info-container {
    @include breakpoint-up($large) {
      margin-left: 9rem;
    }
  }
  &__flag-container {
    width: 100%;
    max-width: 35rem;
    margin-bottom: 3rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__info-wrapper {
    @include breakpoint-up($x-large) {
      display: flex;
    }
  }

  &__name {
    font-size: 1.25rem;
    font-weight: $extra-bold;
    color: inherit;
    margin-bottom: 1.625rem;

    @include breakpoint-up($large) {
      font-size: 1.8rem;
    }
  }

  &__info {
    font-size: 0.875rem;
    font-weight: $semi-bold;
    color: inherit;
    margin-bottom: 1em;

    span {
      font-weight: $light;
    }
  }

  &__info-wrapper-two {
    margin-top: 3rem;

    @include breakpoint-up($x-large) {
      margin: 0 0 0 5rem;
    }
  }

  &__info-domain span {
    text-transform: lowercase;
  }

  &__border-countries-wrapper {
    margin-top: 3rem;
    @include breakpoint-up($x-large) {
      display: flex;
    }
  }

  &__border-countries {
    width: 15ch;
    flex-shrink: 0;
    h3 {
      font-size: 1rem;
      font-weight: $semi-bold;
      color: inherit;
      margin-bottom: 1em;
    }
  }

  &__border-countries-btns {
    flex-wrap: wrap;
  }
}
</style>