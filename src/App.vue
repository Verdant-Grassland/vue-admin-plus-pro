<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import en from 'element-plus/dist/locale/en.mjs'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useLocaleStore } from '@/store/useLocaleStore'

export default defineComponent({
  name: 'app',
  components: {
    [ElConfigProvider.name as string]: ElConfigProvider
  },
  setup() {
    const store = useLocaleStore()
    const currentLocale = store.locale === 'zhCn' ? zhCn : en
    return {
      currentLocale
    }
  }
})
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <RouterView />
  </el-config-provider>
</template>
