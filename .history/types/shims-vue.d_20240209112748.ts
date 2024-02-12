declare module "*.vue" {
  import { App, DefineComponent } from "vue";
  const component: ReturnType<typeof DefineComponent> & {
    install(APP)
  };
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

declare module "vue-virtual-scroller";
declare module "vuedraggable/src/vuedraggable";
declare module "element-plus/dist/locale/en.mjs";
declare module "element-plus/dist/locale/zh-cn.mjs";
