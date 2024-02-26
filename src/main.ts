import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'uno.css'
// 引入windicss
import '@/plugins/unocss'
// 引入全局的svg图标
import '@/plugins/svgIcon'
// 引入全局的element-plus
import elementplus from 'element-plus'
// 引入ELement-Plus
import { useElementPlus } from '@/plugins/elementPlus'
// 引入状态管理
import { setupStore } from '@/store'
// 初始化多语言
import { useI18n } from '@/plugins/vueI18n'
import { MotionPlugin } from '@vueuse/motion'
// 导入字体图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// 引入element-plus样式
import 'element-plus/dist/index.css'
// 引入element-plus暗黑模式的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入重置样式
import './style/reset.scss'
import './style/app.scss'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import './style/tailwind.css'

const app = createApp(App)

app.use(router).use(useElementPlus).use(elementplus).use(setupStore).use(useI18n).use(MotionPlugin)
app.mount('#app')
