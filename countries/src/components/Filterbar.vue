<template>
    <div class="wrapper">
        <select name="regions-filter" id="regions-filter" v-model="selectedRegion"> Filter by region
            <option value="" >Filter by region</option>
            <option v-for="region in regions" :key="region.value" :value="region.value">{{region.value}}</option>
        </select>

    </div>
    
</template>

<script>
export default {
    name: "Filterbar",
    props: ["regions"],
    data() {
        return {
            selectedRegion: "",
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../style/_globals.scss";

    .wrapper {
        align-self: flex-start;
    }

    select {
        width: 12.5rem;
        height: 3rem;
        margin-top: 2.375rem;
        padding-left: 1.5rem;
        appearance: none;        
        border: none;
        border-radius: 5px;
        background: $elements-dark;
        font-family: inherit;
        color: $text-dark;
        box-shadow: $shadow;
        background-image: url('../assets/chevron-down-outline.svg');
        background-repeat: no-repeat;
        background-position: 90%;
        background-size: 6%;

    }

    
</style>