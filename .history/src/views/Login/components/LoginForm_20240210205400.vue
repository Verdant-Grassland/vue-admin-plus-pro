<script setup lang="ts">
  import { ref } from 'vue'
  import VueElementPlusForm '@lljj/vue3-form-element';
  const loginFormData = ref({})
  const loginFormSchema = ref({
    type: 'object',
    require: [
      'username',
      'password'
    ],
    properties: {
      username: {
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
</script>

<template>
  <VueElementPlusForm v-model="loginFormData" :schema="loginFormSchema" />
</template>

<style lang="scss" scoped>
  
</style>