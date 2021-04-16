<template>
  <button
    class="btn"
    @click="$emit('country-selected', borderCountry)"
    :class="{ 'elem-light': !darkmode }"
  >
    {{ borderCountry }}
  </button>
</template>

<script>
export default {
  name: "BorderCountryButton",
  props: ["borderCountry", "darkmode"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>