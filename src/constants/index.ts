/**
 * 请求状态码
 */
export enum ResultCode {
  OK = 200,
  ERROR = 201
}

export class R {
  flag: boolean;
  code: number | null;
  message: string;
  data: Record<string, any> | (() => void);

  constructor(flag: boolean, code: number | null, message: string, data: Record<string, any> | (() => void)) {
    this.flag = flag;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static ok(message: string): R {
    return new R(true, ResultCode.OK, message, {});
  }

  static error(message: string): R {
    return new R(false, ResultCode.ERROR, message, {});
  }
  setData(key: string, value: any): this {
    this.data = { ...this.data, [key]: value };
    return this;
  }
}

/**
 * 请求contentType
 */
export const CONTENT_TYPE: AxiosContentType = 'application/json'

/**
 * 请求超时时间
 */
export const REQUEST_TIMEOUT = 60000

/**
 * 不重定向白名单
 */
export const NO_REDIRECT_WHITE_LIST = ['/login']

/**
 * 不重置路由白名单
 */
export const NO_RESET_WHITE_LIST = ['Redirect', 'Login', 'NoFind', 'Root']

/**
 * 表格默认过滤列设置字段
 */
export const DEFAULT_FILTER_COLUMN = ['expand', 'selection']

/**
 * 是否根据headers->content-type自动转换数据格式
 */
export const TRANSFORM_REQUEST_DATA = true
