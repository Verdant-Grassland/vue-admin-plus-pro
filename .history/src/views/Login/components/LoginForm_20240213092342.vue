<script setup lang="ts">
  import { ref } from 'vue'
  import VueForm from '@lljj/vue3-form-element'

  const loginFormData = ref({})
  const loginFormSchema = ref({
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
    "ui:order": ["adminName", "password"],
    formItemProps: {
      
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