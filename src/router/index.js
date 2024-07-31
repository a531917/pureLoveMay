// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import WarLottery from '../components/WarLottery.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: WarLottery,
        meta: {
            title: '国战名单抽奖器'
        }
    }
  ]
})

export default router