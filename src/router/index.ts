import { createRouter, createWebHistory } from 'vue-router'
import type {  RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import NProgress from '@/hooks/web/useProgress'
import { NO_RESET_WHITE_LIST } from '@/constants'
import { getParentPaths } from '@/router/utils'
import account from './modules/account'

export const constantRouterMap: AppRouteRecordRaw[] = []


const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !NO_RESET_WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件，除了 remaining.ts 文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */
const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts"],
  {
    eager: true
  }
);

Object.keys(modules).forEach((key) => {
  constantRouterMap.push(...modules[key].default)
})

router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
