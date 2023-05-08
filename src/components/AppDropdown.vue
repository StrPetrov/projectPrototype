<template>
    <div>
        <select name="select" id="select">
            <option value="" selected disabled>Choose:</option>
            <option v-for="index in dataProps.optionsAmount" :value="index">Option {{ index }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'AppDropdown',
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

        select {
            width: 150px;
            height: 30px;
            font-size: 18px;
        }
    }
</style>