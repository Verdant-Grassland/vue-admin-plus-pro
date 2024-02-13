<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import VueForm from '@lljj/vue3-form-element'
  import { formItemProps } from 'element-plus';

  const loginFormData = ref({})
  /* const loginFormSchema = reactive({
    type: "object",
    // required: ["adminName", "password"],
    properties: {
      adminName: {
        title: "管理员名",
        type: "string",
        "ui:options": {
          placeholder: "请输入管理员名",
          clearable: true
        },
        "err:options": {
          required: "请输入管理员名"
        }
      },
      password: {
        title: "密码",
        type: "string",
        "ui:options": {
          placeholder: "请输入密码",
          showPassword: true
        },
        "err:options": {
          required: "请输入密码"
        }
      }
    },
    "ui:order": ["adminName", "password"]
  }) */
  const loginFormSchema = reactive({
    type: 'object',
    properties: {
      username: {
        title: 'aaa',
        description: '',
        type: 'string',
        minLength: 1,
        ui: {
          component: 'Input',
          formItemProps: {
            label: 'bbb',
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
        title: 'ccc',
        description: '',
        type: 'string',
        minLength: 1,
        ui: {
          component: 'InputPassword',
          formItemProps: {
            label: 'ddd',
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
        title: 'eee',
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
            label: 'ffff',
            size: 'small'
          }
        }
      },
      login: {
        title: 'gggg',
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

<template>
  <VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema">
    <el-button type="primary">登录</el-button>
  </VueForm>
</template>

<style lang="scss" scoped>
  
</style>