import type { RouteComponent, RouteRecordRaw } from 'vue-router'
import { FunctionalComponent, defineComponent } from 'vue'

/**
* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击
* name:'router-name'          设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
* meta : {
    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)

    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，
                              只有一个时，会将那个子路由当做根路由显示在侧边栏，
                              若你想不管路由下面的 children 声明的个数都显示你的根路由，
                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，
                              一直显示根路由(默认 false)

    title: 'title'            设置该路由在侧边栏和面包屑中展示的名字 [必镇]

    icon: 'svg-name'          设置该路由的图标 [可选]

    extranIcon: 'iconify-same' 菜单名称右侧的额外图标

    showLink: true            如果设置为true，则会在菜单显示(默认 true) [可选]

    showParent: true          如果设置为true，则会显示父级菜单(默认 true) [可选]

    roles: ['admin', 'test']  页面级别权限设置 [可选]

    permission: ['edit','add', 'delete']    设置该路由的权限(按钮级别权限设置) [可选]

    noCache: true             如果设置为true，则不会被 <keep-alive> 缓存(默认 false)

    frameSrc: 'dada'          内嵌的iframe链接 [可选]

    frameLoading: string      是否在加载 iframe 时显示加载动画(默认 true) [可选]
     
    transition?: {
      name?: string
      enterTransition?: string              路由过渡动画页面加载动画(两种模式，第二种权重更高，第一种直接采用`vue`内置的`transitions`动画，第二种是使用`animate.css`编写进、离场动画，平台更推荐使用第二种模式，已经内置了`animate.css`，直接写对应的动画名即可) [可选]
      leaveTransition?: string
    }

    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)

    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)

    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)

    activeMenu: '/dashboard'  显示高亮的路由路径

    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)

    hiddenTag?: boolean       是否隐藏标记视图标签(默认false)

    dynamicLevel?: number     动态路由打开最大数量 [可选]
    
    activePath?: string       将某个菜单激活(主要用于通过`query`或`params`传参的路由，当它们通过配置`showLink: false`后不在菜单中显示，就不会有任何菜单高亮，而通过设置`activePath`指定激活菜单即可获得高亮，`activePath`为指定激活菜单的`path`)
  }
**/

// 自定义路由元数据的接口定义
interface RouteMetaCustom extends Record<string | number | symbol, unknown> {
  // 是否隐藏该路由
  hidden?: boolean
  // 是否总是显示该路由
  alwaysShow?: boolean
  // 路由标题
  title?: string
  // 路由图标
  icon?: string | FunctionalComponent | IconifyIcon
  // 额外的路由图标
  extraIcon?: string | FunctionalComponent | IconifyIcon
  // 是否显示路由链接
  showLink?: boolean
  // 是否显示父级路由
  showParent?: boolean
  // 所有的角色
  roles?: Array<string>
  // 所有的权限
  permission?: Array<string>
  // 是否缓存页面
  noCache?: boolean
  // iframe 源
  frameSrc?: string
  // 是否在加载 iframe 时显示加载中状态
  frameLoading?: boolean
  // 路由过渡动画
  /**
   * @description 当前路由动画效果
   * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
   * @see animate.css {@link https://animate.style}
   */
  transition?: {
    name?: string
    enterTransition?: string
    leaveTransition?: string
  }
  // 是否显示面包屑
  breadcrumb?: boolean
  // 是否固定在 tagsview 中
  affix?: boolean
  // 如果设置了 path，侧边栏将突出显示您设置的路径
  activeMenu?: string
  // 如果设置为 true，则不会将该页面添加到标记视图中
  noTagsView?: boolean
  // 是否允许跳转该路由
  canTo?: boolean
  // 是否隐藏标记视图标签
  hiddenTag?: boolean
  // 动态级别
  dynamicLevel?: number
  // 激活路径
  activePath?: string
}

// 组件类型定义
type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// 声明全局的接口
declare global {
  // 自定义路由记录类型，继承了 RouteRecordRaw 类型，但省略了 meta 和 children 字段，增加了 fullPath 字段
  interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
    path: string
    // 路由名称
    name?: string
    // 路由元数据
    meta: RouteMetaCustom
    // 组件
    component?: RouteComponent
    // 子路由
    children?: AppRouteRecordRaw[]
    // 路由 props
    props?: Recordable
    // 路由完整路径
    fullPath?: string
  }

  // 自定义路由记录类型，省略了 meta、component 和 children 字段，增加了 path、redirect 和 fullPath 字段
  interface AppCustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'component' | 'children'> {
    // 子路由地址
    path: string
    // 路由名称
    name: string
    // 路由元数据
    meta: RouteMetaCustom
    // 组件名称
    component: RouteComponent
    // 路由路径
    path: string
    // 重定向路径
    redirect: string
    // 子路由
    children?: AppCustomRouteRecordRaw[]
  }
  
}

// 扩展 vue-router 中的 RouteMeta 接口
declare module 'vue-router' {
  interface RouteMeta extends CustomizeRouteMeta { }
}
