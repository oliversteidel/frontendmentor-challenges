<template>
  <div
    class="card"
    @click="$emit('country-selected', country.name)"
    :class="{ 'elem-light': !darkmode }"
  >
    <div class="card__img-wrapper">
      <img :src="country.flag" alt="" class="card__flag" />
    </div>
    <div class="card__data">
      <p class="card__country-name" :country="country">{{ country.name }}</p>
      <div class="card__info flex ai-c">
        <p class="card__info-tag">Population:</p>
        <p class="card__info-value">{{ population }}</p>
      </div>
      <div class="card__info flex ai-c">
        <p class="card__info-tag">Region:</p>
        <p class="card__info-value">{{ country.region }}</p>
      </div>
      <div class="card__info flex ai-c">
        <p class="card__info-tag">Capital:</p>
        <p class="card__info-value">{{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["country", "darkmode"],
  computed: {
    //for better readability this function converts the population number in a comma seperated string
    population() {
      if (this.country.population > 999) {
        let populationString = this.country.population.toString();
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
        return this.country.population;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.card {
  width: 16.5rem;
  border-radius: 5px;
  background: $elements-dark;
  color: $text-dark;
  margin-bottom: 4.625rem;
  box-shadow: $shadow;
  overflow: hidden;
  cursor: pointer;
  align-self: stretch;

  @include breakpoint-up($flex-wrap-enabled) {
    margin-bottom: 0;
  }

  &__img-wrapper {
    width: 100%;
  }

  &__flag {
    width: 100%;
    height: 100%;
  }

  &__data {
    padding: 1.875rem 1.5rem;
  }

  &__country-name {
    font-size: 1rem;
    font-weight: $semi-bold;
    color: inherit;
    margin-bottom: 1em;
  }

  &__info {
    margin-bottom: 0.4em;
  }

  &__info-tag {
    font-size: 0.875rem;
    font-weight: $semi-bold;
    color: inherit;
  }

  &__info-value {
    font-size: 0.875rem;
    font-weight: $light;
    color: inherit;
    margin-left: 0.5em;
  }
}
</style>