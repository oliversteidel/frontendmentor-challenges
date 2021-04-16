<template>
  <div class="wrapper flex ai-c jc-c">
    <header class="header flex ai-c jc-sb">
      <h1 class="header__title">Where in the world?</h1>
      <div
        class="header__theme-switch-wrapper flex ai-c"
        @click="$emit('switch-theme')"
      >
        <transition name="rise-up">
          <img
            src="../assets/icon-sun.svg"
            alt=""
            class="header__icon"
            v-if="darkmode"
          />
        </transition>
        <transition name="rise-up" mode="out-in">
          <img
            src="../assets/icon-moon.svg"
            alt=""
            class="header__icon"
            v-if="!darkmode"
          />
        </transition>
        <p class="header__theme-text" v-if="darkmode">Light Mode</p>
        <p class="header__theme-text" v-if="!darkmode">Dark Mode</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["darkmode"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.wrapper {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5rem;
  padding: 0 1.5rem;
  color: $text-dark;
  background: $elements-dark;
  box-shadow: $shadow;
  z-index: 200;
}

.header {
  width: 100%;
  max-width: 80.5rem;

  &__title {
    font-size: 0.875rem;
    font-weight: $extra-bold;
    color: inherit;

    @include breakpoint-up($large) {
    font-size: 1.4375rem;
  }
  }

  &__theme-switch-wrapper {
    cursor: pointer;
    position: relative;
  }

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    left: -.5rem;
  }

  &__theme-text {
    font-size: 0.8125rem;
    font-weight: $semi-bold;
    color: inherit;
    margin-left: 0.75rem;

    
  }

  .rise-up-enter-active,
  .rise-up-leave-active {
    transition: transform 0.4s cubic-bezier(0.35, -0.23, 0.42, 1.31),
      opacity 0.4s ease-in;
  }

  .rise-up-enter,
  .rise-up-leave-to {
    opacity: 0;
    transform: translateY(2rem);
  }
}
</style>