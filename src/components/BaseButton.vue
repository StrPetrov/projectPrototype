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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 200px;
    background-color: rgb(226, 222, 222);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    
    button {
        width: 200px;
        height: 50px;
        background-color: rgb(155, 64, 155);
        font-size: 20px;
        cursor: pointer;
    }
}
</style>