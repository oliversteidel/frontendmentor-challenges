<template>
  <div class="wrapper">
    <div
      class="select flex ai-c"
      :class="{ 'elem-light': !darkmode }"
      :selectedRegion="selectedRegion"
      @click="toggleFilterOptions"
      
    >
      {{ selectedRegion }}
    </div>
    <div class="option-wrapper" v-if="filterOpen" :class="{ 'elem-light': !darkmode }">
      <div
        class="option"        
        v-for="region in regions"
        :key="region.value"
        @click="[selectRegion(region.value), $emit('send-selected-region', selectedRegion)]"
        
      >
        {{ region.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filterbar",
  props: ["regions", "darkmode"],
  data() {
    return {
      selectedRegion: "Filter by region",
      filterOpen: false,     
    };
  },
  methods: {
    toggleFilterOptions() {
      this.filterOpen = !this.filterOpen;
    },
    selectRegion(value) {
      this.selectedRegion = value;
      this.toggleFilterOptions();      
    },
    
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.select {
  width: 12.5rem;
  height: 3rem;
  margin-top: 2.375rem;
  padding-left: 1.5rem;
  appearance: none;
  border: none;
  border-radius: 5px;
  background: $elements-dark;
  font-size: 0.875rem;
  color: $text-dark;
  box-shadow: $shadow;
  background-image: url("../assets/chevron-down-outline.svg");
  background-repeat: no-repeat;
  background-position: 90%;
  background-size: 6%;
  position: relative;
  cursor: pointer;

  @include breakpoint-up($medium) {
    margin-top: 1.5rem;
  }
}

.option-wrapper {
  width: 12.5rem;
  margin-top: 4px;
  padding: 1em 0;
  background: $elements-dark;
  font-size: 0.875rem;
  line-height: 2em;
  color: $text-dark;
  border-radius: 5px;
  box-shadow: $shadow;
  position: absolute;  
  z-index: 100;

  .option {
    padding: 0 1.5rem;
    cursor: pointer;
  }  

  .option:hover {
    background: $elements-dark-hover;
  }
}




</style>