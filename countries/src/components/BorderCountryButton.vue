<template>
  <button class="btn" @click="$emit('country-selected', borderCountry)">{{ borderCountry }}</button>
</template>

<script>
export default {
  name: "BorderCountryButton",
  props: ["borderCountry"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>