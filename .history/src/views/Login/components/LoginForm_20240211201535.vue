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
const formData = ref({})
const schema = ref({
  type: 'object',
    required: [
      'userName',
      'age',
    ],
      properties: {
    userName: {
      type: 'string',
        title: '用户名',
                        default: 'Liu.Jun',
                    },
    age: {
      type: 'number',
        title: '年龄'
    },
    bio: {
      type: 'string',
        title: '签名',
          minLength: 10,
                        default: '知道的越多、就知道的越少',
                    }
  }
})
const uiSchema = ref({
  bio: {
    'ui:options': {
      placeholder: '请输入你的签名',
        type: 'textarea',
          rows: 1
    }
  }
})
</script>

<template>
  <div>
    <!--<VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema" />-->
<vue-form
        v-model="formData"
        :ui-schema="uiSchema"
        :schema="schema"
    >
  </div>
</template>

<style lang="scss" scoped>
  
</style>