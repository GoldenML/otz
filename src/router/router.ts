import { createRouter, createWebHistory } from "vue-router";
import {defineAsyncComponent} from "vue";

const routes = [
    {
        path: '/login',
        component: defineAsyncComponent(() => import('../views/login.vue')),
        meta: {
            title: '登录页'
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next)=>{
    console.log(to, from, next)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})
export default router