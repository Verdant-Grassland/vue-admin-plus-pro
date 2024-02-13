import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'uno.css'
// 引入ELement-Plus
import { useElementPlus } from '@/plugins/elementPlus'
// 引入状态管理
import { setupStore } from '@/store'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(useElementPlus)
  .use(setupStore)
app.mount('#app')
