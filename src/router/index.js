import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ToDoList from '../views/ToDoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 自訂義路由
      path: '/',
      // 自訂義頁面名稱
      name: 'home',
      // 自訂義要使用到的元件
      component: ToDoList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/calc',
      name: 'calc',
      component: () => import('../views/CalcView.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/ToDoList.vue')
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/WeatherApi.vue')
    },
    
  ]
})

export default router
