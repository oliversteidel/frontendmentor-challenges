<template>
  <div class="card">
    <div class="card__img-wrapper">
      <img :src="country.flag" alt="" class="card__flag" />
    </div>
    <div class="card__data">
      <h3 class="card__country-name" :country="country">{{ country.name }}</h3>
      <div class="card__info flex ai-c">
        <p class="card__info-tag">Population:</p>
        <p class="card__info-value">{{ country.population }}</p>
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
  props: ["country"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.card {
  width: 16.5625rem;
  //height: 21.125rem;
  border-radius: 5px;
  background: $elements-dark;
  margin-top: 2rem;
  box-shadow: $shadow;
  overflow: hidden;
  cursor: pointer;

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
    color: $text-dark;
    margin-bottom: 1em;
  }

  &__info {
    margin-bottom: 0.4em;
  }

  &__info-tag {
    font-size: 0.875rem;
    font-weight: $semi-bold;
    color: $text-dark;
  }

  &__info-value {
    font-size: 0.875rem;
    font-weight: $light;
    color: $text-dark;
    margin-left: 0.5em;
  }
}
</style>