import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index/Index.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "找不到页面",
    component: () => import("../views/NotFound/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
