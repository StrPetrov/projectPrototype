<template>
    <div class="side_bar">
        <div class="cmp" v-for="(comp, index) in dataStore.componentsArray" :key="index">
            <input class="checkboxes" :id="index" type="checkbox"><label>{{ comp.name }}</label>
        </div>
        <button @click="render">Render elements</button>
    </div>
</template>

<script>

    import { mapStores } from 'pinia'
    import { useStore } from '../store'

    export default {
        name: 'TheSideBar',
        methods: {
            render() {
                const checkedInputs = []
                const inputs = document.querySelectorAll('.checkboxes')
                inputs.forEach(input => {
                    if (input.checked) {
                        checkedInputs.push(input.id)
                    }
                })
                this.dataStore.ids = checkedInputs
            }
        },
        computed: {
            ...mapStores(useStore)
        }
    }
</script>

<style lang="scss" scoped>
    .side_bar {
        height: 100%;
        background-color: grey;
        padding-bottom: 200px;

        .cmp {
            padding: 10px;
            font-size: 19px;
        }

        input {
            width: 19px;
            height: 19px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
            cursor: pointer;
        }

        label {
            font-size: 19px;
            display: inline-block;
            vertical-align: middle;
        }

        button {
            display: block;
            margin: 20px auto;
            width: 150px;
            height: 40px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
        }
    }
</style>