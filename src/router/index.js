import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from '../pages/Home.vue'
import TodoList from '../pages/TodoList.vue'
import Rate from '../pages/Rate.vue'

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home
}, {
  path: '/todoList',
  name: 'TodoList',
  component: TodoList
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