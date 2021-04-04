<template>
    <button class="btn">{{borderCountry}}</button>
</template>

<script>
export default {
    name: "BorderCountryButton",
    props: ["borderCountry"]
    
    
}
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

button {
    padding: 0 2em;
}


</style>