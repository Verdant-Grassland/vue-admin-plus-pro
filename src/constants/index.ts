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
  data: Map<string, any>;

  constructor(flag: boolean, code: number | null, message: string, data?: Map<string, any>) {
    this.flag = flag;
    this.code = code;
    this.message = message;
    this.data = data || new Map<string, any>();
  }

  static ok(message: string): R {
    return new R(true, ResultCode.OK, message, new Map());
  }

  static error(message: string): R {
    return new R(false, ResultCode.ERROR, message, new Map());
  }
  // 重载声明
  setData(data: Map<string, any>): R;
  setData(key: string, value: any): R;

  // 实现
  setData(key: string | Map<string, any>, value?: any): R {
    if (typeof key === 'string' && value !== undefined) {
      // 当第一个参数是字符串且第二个参数存在时，处理为键值对设置
      this.data.set(key, value)
      console.log(key, value)
    } else if (key instanceof Map) {
      // 当第一个参数是Map类型时，直接替换data属性
      this.data = key
      console.log(key)
    }
    return this
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
