// import {
//     createRouter,
//     createWebHashHistory,
//   } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
} from './grouter/index'

import Home from '../pages/Home.vue'
import TodoList from '../pages/TodoList.vue'
import Rate from '../pages/Rate.vue'
import Counter from '../pages/Counter.vue'

// import About from '../pages/About.vue'
import Heading from '../pages/Head.vue'

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
}, {
  path: '/counter',
  name: 'Counter',
  component: Counter
}, {
  path: '/head',
  name: 'Head',
  component: Heading
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router