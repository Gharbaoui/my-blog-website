import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutmeRoute from '../components/aboutme/aboutme.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {name: 'aboutme'}
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: AboutmeRoute
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
