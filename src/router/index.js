import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index/Index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
