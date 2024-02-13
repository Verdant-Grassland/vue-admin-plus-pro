import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'uno.css'
// 引入ELement-Plus
import { useElementPlus } from '@/plugins/elementPlus'

const app = createApp(App)

app.use(createPinia())
.use(router)
    .use(useElementPlus)

app.mount('#app')
