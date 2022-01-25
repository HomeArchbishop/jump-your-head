import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    alias: ['/home'],
    component: () => import('../views/Home.vue')
  },
  {
    path: '/jump',
    name: 'JumpView',
    component: () => import('../views/Jump.vue')
  },
  {
    path: '/run',
    name: 'RunView',
    component: () => import('../views/Run.vue')
  },
  {
    path: '/sit',
    name: 'SitView',
    component: () => import('../views/Sit.vue')
  },
  {
    path: '/jack',
    name: 'JackView',
    component: () => import('../views/Jack.vue')
  },
  {
    path: '/plank',
    name: 'PlankView',
    component: () => import('../views/Plack.vue')
  },
  {
    path: '/side',
    name: 'SideView',
    component: () => import('../views/Side.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
