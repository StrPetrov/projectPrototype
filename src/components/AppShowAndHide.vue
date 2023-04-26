<template>
    <div class="main_wrapper">
        <div class="button_wrapper">
            <button @click="show">Show</button>
            <button @click="hide">Hide</button>
        </div>
        <div class="input_wrapper">
            <input type="text" id="inputField">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppShowAndHide',
        methods: {
            show() {
                const inputField = document.querySelector('#inputField')
                inputField.style.display = 'block'
            },
            hide() {
                const inputField = document.querySelector('#inputField')
                inputField.style.display = 'none'
            }   
        }
    }
</script>

<style lang="scss" scoped>
.main_wrapper {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 200px;
    background-color: rgb(226, 222, 222);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;

    .button_wrapper {
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            display: block;
            width: 150px;
            height: 50px;
            background-color: rgb(62, 244, 62);
            color: white;
            font-size: 20px;
            cursor: pointer;
            margin: 20px;
            border: none;
            border-radius: 5px;
            &:hover {
                background-color: rgb(48, 147, 48);
            }
        }
    }

    .input_wrapper {
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 300px;
            height: 50px;
            font-size: 25px;
            text-align: center;
            border-radius: 5px;
            border: none;
        }
    }
 
}
</style>