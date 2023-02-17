import { createRouter, createWebHashHistory } from 'vue-router'
import { isMobileTerminal } from '../utiils/flexlble'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'
// 创建vuerouter实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
