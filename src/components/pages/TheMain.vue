<template>
    <div class="main_cont">
        <AppHeader />
        <div class="content_cont">
            <div class="col-25"><TheSideBar /></div>
            <div class="col-75">
                <button id="logout" @click="logout">Logout</button>
                <button id="shop" @click="openShopPage">Open shop page</button>
                <h1>This will be main app content page</h1>
                <component v-for="(comp, index) in dataStore.toRender" :key="index" :is="comp.type" :dataProps="comp.dataProps" />
            </div>
        </div>
        <AppFooter />
    </div>
    
</template>

<script>

    import TheSideBar from '../TheSideBar.vue'
    import AppHeader from '../AppHeader.vue'
    import AppFooter from '../AppFooter.vue'
    import BaseButton from '../BaseButton.vue'
    import BaseInput from '../BaseInput.vue'
    import AppTable from '../AppTable.vue'
    import AppDropdown from '../AppDropdown.vue'
    import AppShowAndHide from '../AppShowAndHide.vue'

    import { mapStores } from 'pinia'
    import { useStore } from '../../store'

    export default {
        name: 'TheMain',
        components: {
            TheSideBar,
            AppHeader,
            AppFooter,
            BaseButton,
            BaseInput,
            AppTable,
            AppDropdown,
            AppShowAndHide
        },
        methods: {
            logout() {
                let q = sessionStorage.getItem('authenticated')
                const obj = JSON.parse(q)
                obj.loggedIn = false
                const text = JSON.stringify(obj)
                sessionStorage.setItem('authenticated', text)
                this.$router.push('/')
            },
            openShopPage() {
                this.$router.push({ name: 'shop'})
            }
        },
        computed: {
            ...mapStores(useStore)
        },
        beforeRouteEnter(to, from, next)  {
            const requiresAuth = to.meta.requiresAuth
            let data = sessionStorage.getItem('authenticated')
            let objData = JSON.parse(data)
            let isAuthenticated = objData.loggedIn

            if (requiresAuth && !isAuthenticated) {
                next('/')
            }
            else {
                next()
            }
        }
    }
</script>

<style lang="scss" scoped>

    .main_cont {
        height: auto;
        position: relative;
        .content_cont {
        display: flex;
        height: auto;

        .col-25 {
            flex: 20%;
        }

        .col-75 {
            flex: 80%;
            margin-bottom: 150px;

            h1 {
            text-align: center;
            font-size: 50px;
            margin-top: 20px;
        }
        #shop {
            width: 200px;
            height: 50px;
            cursor: pointer;
            font-size: 25px;
            background-color: rgb(117, 254, 117);
            border: none;
            &:hover {
                background-color: rgb(76, 232, 76);
            }
        }

        #logout {
            float: right;
            width: 150px;
            height: 50px;
            cursor: pointer;
            font-size: 25px;
            background-color: rgb(117, 254, 117);
            border: none;
            &:hover {
                background-color: rgb(76, 232, 76);
            }
        }
        }
    }
    }

</style>