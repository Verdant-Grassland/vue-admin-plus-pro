<script setup lang="ts">
  import { ref } from 'vue'
  import VueElementPlusForm from '@lljj/vue3-form-element'
  const loginFormData = ref({})
  const loginFormSchema = ref({
    type: 'object',
    required: [
      'adminName',
      'password'
    ],
    properties: {
      adminName: {
        type: 'string',
        title: '用户名',
        "ui:options": {
          "placeholder": "请输入管理员名",
          "clearable": true
        }
      },
      password: {
        type: 'string',
        title: '密码',
        "ui:options": {
          "placeholder": "请输入密码",
          "showPassword": true
        }
      }
    }
  })
</script>

<template>
  <div>
    <VueElementPlusForm v-model="loginFormData" :schema="loginFormSchema" />
  </div>
</template>

<style lang="scss" scoped>
  
</style>