<template>
  <div class="searchbar-wrapper flex ai-c">
    <i class="fas fa-search"></i>
    <input
      type="search"
      name="searchbar"
      id="searchbar"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
export default {
  name: "Searchbar",
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.searchbar-wrapper {
  width: 100%;
  max-width: 30rem;
  height: 3.625rem;
  margin-top: 1.5rem;
  padding: 0 1.875rem;
  background: $elements-dark;
  border-radius: 5px;
  box-shadow: $shadow;

  .fas {
    color: $text-dark;
  }

  input {
    border: none;
    background: transparent;
    color: $text-dark;
    font-family: inherit;
    margin-left: 1.625rem;
  }

  input::placeholder {
      opacity: 1;
  }
}
</style>

