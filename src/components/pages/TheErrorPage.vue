<template>
    <div>
       <h1>Page not found! You can go to <router-link to="/">login</router-link> page or our <router-link to="/shop">shop</router-link>.</h1> 
    </div>
</template>

<script>
    export default {
        name: 'TheErrorPage'
    }
</script>

<style lang="scss" scoped>
    div {
        h1 {
            text-align: center;
            font-size: 50px;
        }
    }
</style>