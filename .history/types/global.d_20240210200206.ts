import type { ECharts } from "echarts";
import type { TableColumns } from "@pureadmin/table";
import { Recordable } from "@pureadmin/utils";
import { Effect } from "@pureadmin/table";

/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare type LocaleType = 'zh-CN' | 'en';
declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;
declare type ElementPlusInfoType = 'success' | 'info' | 'warning' | 'danger';
declare type LayoutType = 'classic' | 'topLeft' | 'top' | 'cutMenu';
declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put';
declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    engines: {
      node: string;
      pnpm: string;
    };
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};

interface Window {
  // Global vue app instance
  __APP__: App<Element>;
  webkitCancelAnimationFrame: (handle: number) => void;
  mozCancelAnimationFrame: (handle: number) => void;
  oCancelAnimationFrame: (handle: number) => void;
  msCancelAnimationFrame: (handle: number) => void;
  webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
}

declare type ViteCompression =
  | "none"
  | "gzip"
  | "brotli"
  | "both"
  | "gzip-clear"
  | "brotli-clear"
  | "both-clear";

interface ViteEnv {
  VITE_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_ROUTER_HISTORY: string;
  VITE_CDN: boolean;
  VITE_HIDE_HOME: string;
  VITE_COMPRESSION: ViteCompression;
}

interface TableColumnList extends Array<TableColumns> { }

interface PlatformConfigs {
  Version?: string;
  Title?: string;
  FixedHeader?: boolean;
  HiddenSideBar?: boolean;
  MultiTagsCache?: boolean;
  KeepAlive?: boolean;
  Locale?: string;
  Layout?: string;
  Theme?: string;
  DarkMode?: boolean;
  OverallStyle?: string;
  Grey?: boolean;
  Weak?: boolean;
  HideTabs?: boolean;
  HideFooter?: boolean;
  SidebarStatus?: boolean;
  EpThemeColor?: string;
  ShowLogo?: boolean;
  ShowModel?: string;
  MenuArrowIconNoTransition?: boolean;
  CachingAsyncRoutes?: boolean;
  TooltipEffect?: Effect;
  ResponsiveStorageNameSpace?: string;
  MapConfigure?: {
    amapKey?: string;
    options: {
      resizeEnable?: boolean;
      center?: number[];
      zoom?: number;
    };
  };
}

interface StorageConfigs {
  version?: string;
  title?: string;
  fixedHeader?: boolean;
  hiddenSideBar?: boolean;
  multiTagsCache?: boolean;
  keepAlive?: boolean;
  locale?: string;
  layout?: string;
  theme?: string;
  darkMode?: boolean;
  grey?: boolean;
  weak?: boolean;
  hideTabs?: boolean;
  hideFooter?: boolean;
  sidebarStatus?: boolean;
  epThemeColor?: string;
  themeColor?: string;
  overallStyle?: string;
  showLogo?: boolean;
  showModel?: string;
  mapConfigure?: {
    amapKey?: string;
    options: {
      resizeEnable?: boolean;
      center?: number[];
      zoom?: number;
    };
  };
  username?: string;
}

interface ResponsiveStorage {
  locale: {
    locale?: string;
  };
  layout: {
    layout?: string;
    theme?: string;
    darkMode?: boolean;
    sidebarStatus?: boolean;
    epThemeColor?: string;
    themeColor?: string;
    overallStyle?: string;
  };
  configure: {
    grey?: boolean;
    weak?: boolean;
    hideTabs?: boolean;
    hideFooter?: boolean;
    showLogo?: boolean;
    showModel?: string;
    multiTagsCache?: boolean;
  };
  tags?: Array<any>;
}

interface GlobalPropertiesApi {
  $echarts: ECharts;
  $storage: ResponsiveStorage;
  $config: PlatformConfigs;
}
