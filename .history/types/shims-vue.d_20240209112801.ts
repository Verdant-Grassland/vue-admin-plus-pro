declare module "*.vue" {
  import { App, de } from "vue";
  const component: ReturnType<typeof DefineComponent> & {
    install(app: App): void
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
