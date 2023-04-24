<template>
    <div class="header_cont">
        <h1>Header</h1>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss" scoped>
    .header_cont {
        height: 130px;
        width: 100%;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;

            h1 {
                font-size: 50px;
            }
    }
</style>