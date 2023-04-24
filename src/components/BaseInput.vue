<template>
    <div>
        <input 
        v-for="index in dataProps.amount"
        :type="dataProps.inputType"
        :name="dataProps.name"
        >
    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        props: ['dataProps']
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        input[type="radio"] {
            margin: 10px;
            width: 30px;
            height: 30px;
        }

        input[type="date"] {
            width: 200px;
            height: 30px;
        }

        input[type="checkbox"] {
            width: 30px;
            height: 30px;
            margin: 10px;
        }
    }
</style>