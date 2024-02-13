<template>
  <VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import VueForm from '@lljj/vue3-form-element'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const loginFormData = ref({})
const loginFormSchema = reactive({
  type: 'object',
  properties: {
    username: {
      title: t('login.username'),
      description: '',
      type: 'string',
      minLength: 1,
      ui: {
        component: 'Input',
        formItemProps: {
          label: t('login.username'),
          colProps: {
            span: 24
          }
        },
        componentProps: {
          placeholder: 'admin or test'
        }
      }
    },
    password: {
      title: t('login.password'),
      description: '',
      type: 'string',
      minLength: 1,
      ui: {
        component: 'InputPassword',
        formItemProps: {
          label: t('login.password'),
          colProps: {
            span: 24
          }
        },
        componentProps: {
          style: {
            width: '100%'
          },
          placeholder: 'admin or test'
        }
      }
    },
    remember: {
      title: t('login.remember'),
      description: '',
      type: 'boolean',
      default: false,
      ui: {
        component: 'Checkbox',
        formItemProps: {
          colProps: {
            span: 24
          }
        },
        componentProps: {
          label: t('login.remember'),
          size: 'small'
        }
      }
    },
    login: {
      title: t('login.login'),
      description: '',
      type: 'object',
      properties: {
        loginBtn: {
          title: t('login.login'),
          description: '',
          type: 'string',
          ui: {
            widget: 'button',
            formItemProps: {
              colProps: {
                span: 24
              }
            },
            widgetProps: {
              loading: loading.value,
              type: 'primary',
              class: 'w-[100%]',
              onClick: signIn
            }
          }
        },
        registerBtn: {
          title: t('login.register'),
          description: '',
          type: 'string',
          ui: {
            widget: 'button',
            formItemProps: {
              colProps: {
                span: 24
              }
            },
            widgetProps: {
              class: 'w-[100%]',
              onClick: toRegister
            }
          }
        }
      }
    }
  },
  uiSchema: [
    {
      key: 'username'
    },
    {
      key: 'password'
    },
    {
      key: 'remember'
    },
    {
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
  ]
})
</script>
