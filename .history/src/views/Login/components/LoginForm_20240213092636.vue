<template>
  <VueForm v-model:formData="loginFormData" :schema="loginFormSchema">
    <template #default>
      <h2 class="text-2xl font-bold text-center w-[100%]">{{ t('login.login') }}</h2>
    </template>
    <el-button type="primary">登录</el-button>
  </VueForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueForm from '@lljj/vue3-form-element'
import { formItemProps } from 'element-plus';

const loginFormData = ref(null)
const loginFormSchema = ref({
  type: "object",
  properties: {
    adminName: {
      title: "管理员名",
      type: "string",
      "ui:options": {
        placeholder: "请输入管理员名",
        clearable: true
      },
      "ui:errors": {
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
      "ui:errors": {
        required: "请输入密码"
      }
    }
  },
  "ui:order": ["adminName", "password"],
  formItemProps: {
    slots: {
      default: () => {
        return <h2 class="text-2xl font-bold text-center w-[100%]" > {{ t('login.login') }
      }< /h2>
  }
}
    }
  })
</script>

<style lang="scss" scoped></style>
