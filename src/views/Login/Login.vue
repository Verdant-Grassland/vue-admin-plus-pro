<script setup lang="ts">
import { nextTick, ref, toRaw, watch } from 'vue'
import { useRouter } from 'vue-router'
import { bg, avatar, illustration } from '@/views/login/utils/static'
import sun from '@/components/Icon/Sun.vue'
import moon from '@/components/Icon/Moon.vue'
import globalization from '@/assets/svg/globalization.svg?component'
import { useDark, useToggle } from '@vueuse/core'
import Motion from './utils/motion'
import TypeIt from '@/components/Typeit'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

const title = ref(import.meta.env.VITE_APP_TITLE)
const router = useRouter()

const isDark = useDark({
  storageKey: 'theme-appearance'
})
const toggleDark = useToggle(isDark)
const darkMode = ref(isDark.value)

watch(
  () => darkMode.value,
  () => {
    toggleDark()
  }
)

let resolveFn: (value: boolean | PromiseLike<boolean>) => void
const switchTheme = (event: MouseEvent) => {
  const isAppearanceTransition =
    // @ts-expect-error
    document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition || !event) {
    resolveFn(true)
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    resolveFn(true)
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
}
const beforeChange = (): Promise<boolean> => {
  return new Promise((resolve) => {
    resolveFn = resolve
  })
}

const getDropdownItemStyle = (locale: string, lang: string) => {
  // 返回下拉菜单项的样式
  // 可根据当前语言和传入的语言进行判断，返回对应的样式
}

const getDropdownItemClass = (locale: string, lang: string) => {
  // 返回下拉菜单项的类名
  // 可根据当前语言和传入的语言进行判断，返回对应的类名
}

const translationCh = () => {
  // 简体中文翻译逻辑
}

const translationEn = () => {
  // 英文翻译逻辑
}

const isLogin = ref(true)

const toRegister = () => {
  isLogin.value = false
}

const toLogin = () => {
  isLogin.value = true
}
</script>

<template>
  <div class="select-one">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <div @click.stop="switchTheme">
        <ClientOnly>
          <el-switch
            v-model="darkMode"
            inline-prompt
            :active-icon="sun"
            :inactive-icon="moon"
            :before-change="beforeChange"
          />
        </ClientOnly>
      </div>
      <el-dropdown trigger="click">
        <globalization
          class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"
        />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'zh')]"
              @click="translationCh"
            >
              简体中文
            </el-dropdown-item>
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]"
              @click="translationEn"
            >
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">
              <TypeIt :values="[title]" :cursor="false" :speed="150" />
            </h2>
          </Motion>
          <Motion :delay="100">
            <LoginForm
              v-if="isLogin"
              class="p-20px h-auto m-auto lt-xl:rounded-3xl lt-xl:light:bg-white"
              @to-register="toRegister"
            />
          </Motion>
          <Motion :delay="150">
            <!-- <RegisterForm
              v-else
              class="p-20px h-auto m-auto lt-xl:rounded-3xl lt-xl:light:bg-white"
              @to-register="toLogin" /> -->
          </Motion>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('@/style/login.css');
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}

:deep(.el-switch__core) {
  --el-switch-on-color: #2c2c2c;
  --el-switch-off-color: #f2f2f2;
  --el-switch-border-color: var(--border-color);

  .el-switch__action {
    width: 14px;
    height: 14px;
  }
}

:deep(.dark-icon) {
  color: #cfd3dc;
  background-color: #141414;
  border-radius: 50%;
}

:deep(.light-icon) {
  color: #606266;
}
</style>
