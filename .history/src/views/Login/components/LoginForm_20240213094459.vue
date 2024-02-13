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
      adminName: {
        title: '管理员名',
        type: 'string',
        "ui:options": {
          placeholder: "请输入管理员名",
          clearable: true
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
      },
      remember: {
        title: '记住我',
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
      uiSchema: [
        {
          key: 'adminName'
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
    }
  })
</script>

<template>
  <VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema">
    <el-button type="primary">登录</el-button>
  </VueForm>
</template>

<style lang="scss" scoped>
  
</style>