import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入windicss
import '@/plugins/unocss'
// 引入全局的svg图标
import '@/plugins/svgIcon'
// 引入ELement-Plus
import { useElementPlus } from '@/plugins/elementPlus'
// 引入状态管理
import { setupStore } from '@/store'
import VueForm from '@lljj/vue3-form-element';
import Vue from 'vue';
import JsonSchemaForm from '@lljj/vue3-form-element'

// 全局注册 或者可以在组件内注册
Vue.component('VueForm', VueForm);

const app = createApp(App)

app
  .use(

export function component(arg0: string, VueForm: JsonSchemaForm) {
          throw new Error('Function not implemented.')
      }
router)
  .use(useElementPlus)
  .use(setupStore)
app.mount('#app')
