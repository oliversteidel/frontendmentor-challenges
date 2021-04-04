<template>
  <div class="wrappper flex-col">
    <button
      class="btn btn--back flex ai-c jc-c"
      @click="$emit('close-country-detail')"
    >
      <img src="../assets/arrow-back-outline.svg" alt="" class="arrow-img" />
      <p>Back</p>
    </button>
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
              Population:&nbsp;<span>{{ selectedCountry.population }}</span>
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
          <div class="country__info-wrapper -two">
            <p class="country__info">
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
            <h3>Border Countries</h3>
          </div>
          <div class="country__border-countries-btns flex">
            <BorderCountryButton
              v-for="borderCountry in borderCountries"
              :key="borderCountry"
              :borderCountry="borderCountry"
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
  props: ["selectedCountry", "countryData"],
  components: {
    BorderCountryButton,
  },
  computed: {
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
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.btn--back {
  .arrow-img {
    height: 50%;
    width: auto;
  }

  p {
    margin: 2px 0 0 10px;
  }
}
</style>