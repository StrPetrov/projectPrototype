import { createRouter, createWebHistory } from 'vue-router'
import TheLogin from './components/pages/TheLogin.vue'
import TheMain from './components/pages/TheMain.vue'
import TheForgottenPassword from './components/pages/TheForgottenPassword.vue'
import TheShop from './components/pages/TheShop.vue'
import TheErrorPage from './components/pages/TheErrorPage.vue'

const routes = [
    { path: '/', component: TheLogin },
    { path: '/playground', name: 'playground', meta: { requiresAuth: true }, component: TheMain },
    { path: '/resetPassword', name: 'resetPassword', component: TheForgottenPassword },
    { path: '/shop', name: 'shop', component: TheShop },
    
    { path: '/:notFound(.*)', component: TheErrorPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router