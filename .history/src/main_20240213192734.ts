import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入windicss
import '@/plugins/unocss'
// 引入全局的svg图标
import '@/plugins/svgIcon'
// 引入ELement-Plus
// import { useElementPlus } from '@/plugins/elementPlus'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入状态管理
import { setupStore } from '@/store'

const app = createApp(App)

app
  .use(router)
    .use(elementPlus)
  .use(setupStore)
app.mount('#app')
