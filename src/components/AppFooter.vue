<template>
    <div class="footer_cont">
        <h1>Footer</h1>
    </div>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style lang="scss" scoped>
    .footer_cont {
        height: 130px;
        width: 100%;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;

            h1 {
                font-size: 50px;
            }
    }
</style>