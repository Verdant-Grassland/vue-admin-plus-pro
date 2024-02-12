import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'uno.css'
import VueElementPlusForm from '@lljj/vue3-form-element'
createApp.component
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
