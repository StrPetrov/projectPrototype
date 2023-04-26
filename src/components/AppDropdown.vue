<template>
    <div>
        <select name="select" id="select">
            <option value="" selected disabled>Choose:</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'AppDropdown'
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