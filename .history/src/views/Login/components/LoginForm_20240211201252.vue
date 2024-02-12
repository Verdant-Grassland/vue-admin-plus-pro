<script setup lang="ts">
import { ref } from 'vue'
import VueForm from '@lljj/vue3-form-element'

/* const loginFormData = ref({})
const loginFormSchema = ref({
  type: "object",
  required: ["adminName", "password"],
  properties: {
    adminName: {
      title: "管理员名",
      type: "string",
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
      }
    }
  },
  "ui:order": ["adminName", "password"]
}) */
</script>

<template>
  <div>
    <VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema" />-->

  </div>
</template>

<style lang="scss" scoped>
  
</style>