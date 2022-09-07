import Home from './components/Home-page.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/LoginPage.vue'
import Add from './components/AddPage.vue'
import Update from './components/UpdatePage.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router