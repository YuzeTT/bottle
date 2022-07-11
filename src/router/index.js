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
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/Tools/Tools.vue'),
    children: [
      {
        path: 'image_income',
        name: '账单',
        component: () => import('../views/Tools/ImageIncome/Index.vue'),
      },
      {
        path: 'image_progress',
        name: '进度',
        component: () => import('../views/Tools/ImageProgress/Index.vue'),
      },
    ]
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
