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
        minLength: 3,
        maxLength: 15
      },
      password: {
        type: 'string',
        title: '密码',
        minLength: 6,
        maxLength: 20
      }
    }
  })
  /* {
  "type": "object",
  "required": [
      "adminName",
      "password"
  ],
  "properties": {
      "adminName": {
          "title": "管理员名",
          "type": "string",
          "ui:options": {
              "placeholder": "请输入管理员名",
              "clearable": true
          }
      },
      "password": {
          "title": "密码",
          "type": "string",
          "ui:options": {
              "placeholder": "请输入",
              "showPassword": true
          }
      }
  },
  "ui:order": [
      "adminName",
      "password"
  ]
} */
</script>

<template>
  <div>
    <VueElementPlusForm v-model="loginFormData" :schema="loginFormSchema" />
  </div>
</template>

<style lang="scss" scoped>
  
</style>