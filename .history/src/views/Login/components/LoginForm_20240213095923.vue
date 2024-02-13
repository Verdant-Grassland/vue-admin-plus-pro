<script setup lang="ts">
  import { reactive, ref } from 'vue'
  i
  import { ElButton } from 'element-plus'

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
        type: 'boolean',
        default: false,
        "ui:widget": "el-checkbox",
        "ui:options": {
          "label": "记住我"
        }
      },
      //"ui:order": ["adminName", "password", "remember"]
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
    },
  })
</script>

<template>
  <VueForm v-model:formData="loginFormData" v-model:modelValue="loginFormData" :schema="loginFormSchema">
    <!-- <el-button type="primary">登录</el-button> -->
    <div>
      <!-- {t('login.login')} -->
      <ElButton
        type="primary"
        class="w-[100%]"
      >
        登录
      </ElButton>
    </div>
    <!-- {t('login.register')} -->
    <div class="w-[100%] mt-15px">
      <ElButton class="w-[100%]">
        注册
      </ElButton>
    </div>
  </VueForm>
</template>

<style lang="scss" scoped>
  
</style>