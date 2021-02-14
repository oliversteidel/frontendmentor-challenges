<template>
  <header class="header">
    <h1 class="header__title">todo</h1>
    <button class="btn btn--toggle-darkmode" @click="$emit('change-light-theme')">
      <img v-bind:src="btnImg" alt="" class="btn__img" id="btn__img" />
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["btnImg"]
  
  
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.header {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  @media screen and (min-width: $breakpoint) {
    margin-top: 4.875rem;
  }

  &__title {
    text-transform: uppercase;
    font-size: 1.37rem;
    color: $ltVeryLightGray;
    letter-spacing: 0.5em;

    @media screen and (min-width: $breakpoint) {
      font-size: 1.875rem;
    }
  }

  .btn__img {
    transform: scale(0.8);

    @media screen and (min-width: $breakpoint) {
      transform: scale(1);
    }
  }
}
</style>