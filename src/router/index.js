import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/home.vue'
import Rate from '../pages/Rate.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/rate',
    name: 'Rate',
    component: Rate
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router