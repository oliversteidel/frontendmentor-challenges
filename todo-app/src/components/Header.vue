<template>
    <header class="header">
        <h1 class="header__title">todo</h1>
        <button class="btn btn--toggle-darkmode">
            <img src="../assets/icon-moon.svg" alt="" class="btn__img">
        </button>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
    .header {
        width: 100%;
        max-width: 540px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3rem;

        &__title {
            text-transform: uppercase;
            font-size: 1.37rem;
            color: $ltVeryLightGray;
            letter-spacing: .5em;
        }

        .btn {
            border: none;
            background: none;

            .btn__img {
                transform: scale(0.8);
            }
        }
    }

</style>