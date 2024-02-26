import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: {
      hidden: true,
      title: t('login.login'),
      noTagsView: true,
      showLink: false
    }
  }
] satisfies Array<AppRouteRecordRaw>