<template>
    <div>
        <AppHeader />
        <button @click="openShopPage">Shop</button>
        <form @submit.prevent>
            <label for="email">Enter your email:</label><br>
            <input v-model="email" type="text"><br><br>
            <label for="password">Enter your password:</label><br>
            <input v-model="password" type="password"><br><br>
            <input @click="login" type="submit" value="Log in"><br><br>
            <input type="checkbox" name="rem" id="remm"><label for="rem" id="rem">Remmember me</label><br><br>
            <span id="forgot" @click="resetPassword">You forgot your password?</span><br><br>
            <span id="error"> {{ error }}</span>
        </form>
        <AppFooter />
    </div>
</template>

<script>

    import AppHeader from '../AppHeader.vue'
    import AppFooter from '../AppFooter.vue'

    export default {
        name: 'TheLogin',
        components: {
            AppHeader,
            AppFooter
        },
        data() {
            return {
                email: '',
                password: '',
                logInfo: {
                    loggedIn: false
                },
                error: ''
            }
        },
        created() {
            const json = JSON.stringify(this.logInfo)
            sessionStorage.setItem('authenticated', json)
        }, 
        methods: {
            login() {
                const email = ''
                const password = 'test'

                if (/@/.test(this.email) && this.password === password) {
                    this.logInfo.loggedIn = true
                    const json = JSON.stringify(this.logInfo)
                    sessionStorage.setItem('authenticated', json)
                    this.$router.push({ name: 'playground'})
                }
                else if (this.email === '' && this.password === '') {
                    this.error = 'Use your credentials to log in!'
                }
                else if (!/@/.test(this.email)) {
                    this.error = 'Invalid email!'
                }
                else if (this.password !== password) {
                    this.error = 'Invalid password!'
                }
                else {
                    this.error = 'Invalid credentials!'
                }
            },
            resetPassword() {
                this.$router.push({ name: 'resetPassword'})
            },
            openShopPage() {
                this.$router.push({ name: 'shop'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        position: relative;
        height: 100vh;

        button {
            width: 200px;
            height: 50px;
            cursor: pointer;
            font-size: 25px;
            background-color: rgb(117, 254, 117);
            border: none;
            float: right;
            &:hover {
                background-color: rgb(76, 232, 76);
            }
        }

        form {
            width: 400px;
            height: 450px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(251, 181, 181);
            padding: 30px;
            border-radius: 20px;

            label {
                width: 100%;
                font-size: 18px;
            }

            input[type="text"], input[type="password"] {
                width: 100%;
                margin-top: 10px;
                height: 30px;
                border-radius: 5px;
                font-size: 20px;
            }

            input[type="submit"] {
                width: 33%;
                height: 30px;
                text-align: center;
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius: 5px;
                cursor: pointer;
                font-size: 18px;
                background-color: rgb(117, 254, 117);
                &:hover {
                    background-color: rgb(76, 232, 76);
                }
            }

            input[type="checkbox"] {
                width: 20px;
                height: 20px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                cursor: pointer;
            }

            #rem {
                font-size: 19px;
                display: inline-block;
                vertical-align: middle;
                width: 200px;
            }

            #forgot {
                display: block;
                text-align: center;
                margin-top: 50px;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }

            #error {
                display: block;
                text-align: center;
                color: red;
                font-weight: bold;
                font-size: 25px;
            }
        }
    }
</style>