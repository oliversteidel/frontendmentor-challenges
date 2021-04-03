<template>
  <div class="wrappper flex-col">
    <button class="btn btn--back">
      <div class="arrow-img"></div>
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
              Top Level Domain:&nbsp;.<span>{{ selectedCountry.alpha2Code }}</span>
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
          <div class="country__border-countries-btns"></div>
          <!-- <BorderCountryButton /> -->
        </div>
      </div>
    </div>
  </div>
</template>            

<script>
export default {
  name: "TheCountryDetail",
  props: ["selectedCountry"],
  computed: {
    borderCountries() {
      return this.selectedCountry.borders;
    },
    languages() {
      let temp = "";
      this.selectedCountry.languages.forEach((el) => {
        temp.concat(`${el.name},`);
      });
      return temp.slice(-1);
    },
    currencies() {
      let temp = "";
      this.selectedCountry.currencies.forEach((el) => {
        temp.concat(`${el.name},`);
      });
      return temp.slice(-1);
    },
  },
};
</script>