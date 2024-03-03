<script setup lang="ts">
  import { h, reactive, ref, unref } from 'vue'
  import { useAdminStore } from '@/store/modules/admin'
  import VueForm from '@lljj/vue3-form-element'
  import { ElButton, ElMessage } from 'element-plus'
  import { Icon } from '@iconify/vue'
  import User from '@iconify-icons/ri/user-3-fill'
  import Lock from '@iconify-icons/ri/lock-fill'
  import { useI18n } from '@/hooks/web/useI18n'
  const { t } = useI18n()
  const userStore = useAdminStore()
  import { adminLoginApi } from '@/api/admin'
  import { AdminLoginType } from '@/api/admin/types'
  const loginFormData = ref<AdminLoginType>({
    adminName: '',
    adminPhone: '',
    adminEmail: '',
    password: ''
  })
  const loginFormSchema = reactive({
    type: 'object',
    properties: {
      account: {
        title: t('login.adminName') + '/' + t('login.adminEmail') + '/' + t('login.adminPhone'),
        type: 'string',
        'ui:options': {
          placeholder: t('login.accountPlaceholder'),
          clearable: true,
          renderScopedSlots: {
            prefix: () => h(Icon, { icon: User, slot: 'prefix' })
          },
          size: 'large'
        }
      },
      password: {
        title: t('login.password'),
        type: 'string',
        'ui:options': {
          placeholder: t('login.passwordPlaceholder'),
          showPassword: true,
          renderScopedSlots: {
            prefix: () => h(Icon, { icon: Lock, slot: 'prefix' })
          },
          size: 'large'
        },
        'err:options': {
          required: t('login.passwordPlaceholder')
        }
      },
      remember: {
        type: 'boolean',
        default: false,
        'ui:widget': 'el-checkbox',
        'ui:options': {
          label: '记住我'
        }
      },
      forgetPwd: {
        type: 'string',
        'ui:widget': 'el-link',
        'ui:options': {
          label: '忘记密码',
          type: 'primary',
          underline: false
        }
      }
    }
  })
  const uiSchema = reactive({
    login: {
      key: 'login',
      items: [
        {
          key: 'loginBtn'
        },
        {
          key: 'registerBtn'
        }
      ]
    }
  })
  const remember = ref(userStore.getRememberMe)
  const signLogin = async () => {
    const account = (loginFormData.value as any).account
    const data = { ...loginFormData.value }
    if (/^\d{11}$/.test(account)) {
      data.adminPhone = account
    } else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(account)) {
      data.adminEmail = account
    } else {
      data.adminName = account
    }
    let res = await adminLoginApi(data)
    console.log(res)
    if (res.code === 200) {
      ElMessage.success(res.message)
      userStore.setAdminInfo(res.data.adminList)
      userStore.setRememberMe(remember.value)
      userStore.setToken(res.data.token)
      userStore.setTokenKey(res.data.token)
      if (res) {
        // 是否记住我
        if (unref(remember)) {
          const { adminPhone, adminEmail, adminName, password } = data
          if (adminPhone) {
            data.adminPhone = adminPhone
          } else if (adminEmail) {
            data.adminEmail = adminEmail
          } else {
            data.adminName = adminName
          }
          data.password = password
          userStore.setLoginInfo(data)
        } else {
          userStore.setLoginInfo(undefined)
        }
        userStore.setRememberMe(unref(remember))
        userStore.setAdminInfo(res.data.adminList)
      }
    } else {
      ElMessage.error(res.message)
    }
  }
</script>

<template>
  <VueForm v-model="loginFormData" :schema="loginFormSchema" :ui-schema="uiSchema">
    <div class="w-[100%]">
      <ElButton type="primary" class="w-[100%]" @click="signLogin">
        {{ t('login.login') }}
      </ElButton>
    </div>
    <div class="w-[100%] mt-15px">
      <ElButton class="w-[100%]">
        {{ t('login.register') }}
      </ElButton>
    </div>
  </VueForm>
</template>
