<script setup lang="ts">
  import VueElementPlusForm '@lljj/vue3-form-element'
  const loginFormData = ref({})
  const loginFormSchema = ref({
    
  })
</script>

<template>
  <VueElementPlusForm v-model="loginFormData" :schema="loginFormSchema" />
</template>

<style lang="scss" scoped>
  
</style>