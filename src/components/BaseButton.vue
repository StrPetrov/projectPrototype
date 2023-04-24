<template>
    <div>
        <button 
        :style="dataProps.styles" 
        @click="dataProps.clickHandler"
        >
        {{ dataProps.title }}
        </button>
    </div>
</template>

<script>
    export default {
        props: ['dataProps']
    }
</script>

<style lang="scss" scoped>
div {
    button {
        width: 200px;
        height: 50px;
        background-color: rgb(155, 64, 155);
        font-size: 20px;
        margin: 5px auto;
        display: block;
        cursor: pointer;
    }
}
</style>