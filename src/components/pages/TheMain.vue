<template>
    <div class="main_cont">
        <AppHeader />
        <div class="content_cont">
            <div class="col-25"><TheSideBar @checkedComponentsIDs="recieveIDs" :comps="componentsArray" /></div>
            <div class="col-75">
                <button id="logout" @click="logout">Logout</button>
                <button id="shop" @click="openShopPage">Open shop page</button>
                <h1>This will be main app content page</h1>
                <component v-for="(comp, index) in componentsToRender" :key="index" :is="comp.type" :dataProps="comp.dataProps" />
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

    export default {
        name: 'TheMain',
        data() {
            return {
                componentsArray: [
                    { 
                      name: 'Open New Window Btn',
                      type: 'BaseButton',
                      dataProps: {
                         title: 'Open new window', 
                         clickHandler: () => window.open('https://www.google.com', '_blank', 'width=500,height=500'),
                         styles: { color: 'white'}
                        }
                    },
                    { 
                      name: 'Open New Tab Btn',
                      type: 'BaseButton', 
                      dataProps: { 
                         title: 'Open new tab', 
                         clickHandler: () => window.open('https://www.google.com', '_blank'),
                         styles: { color: 'red'}
                        }
                    },
                    {
                      name: 'Radio btns',
                      type: 'BaseInput',
                      dataProps: {
                        inputType: 'radio',
                        name: 'radio',
                        amount: 3,
                      }    
                    },
                    {
                      name: 'Calendar input',
                      type: 'BaseInput',
                      dataProps: {
                        inputType: 'date',
                        name: 'calendar',
                        amount: 1
                      }
                    },
                    {
                      name: 'Checkboxes',
                      type: 'BaseInput',
                      dataProps: {
                         inputType: 'checkbox',
                         name: 'checkbox',
                         amount: 3
                        }
                    }
                ],
                componentsToRender: []
            }
        },
        components: {
            TheSideBar,
            AppHeader,
            AppFooter,
            BaseButton,
            BaseInput
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
            },
            recieveIDs(ids) {
                this.componentsToRender = ids.map(index => this.componentsArray[index])
            }
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
        height: 1200px;
        position: relative;
        .content_cont {
        display: flex;
        height: 960px;

        .col-25 {
            flex: 20%;
        }

        .col-75 {
            flex: 80%;

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