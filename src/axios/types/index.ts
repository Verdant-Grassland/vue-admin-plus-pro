import NProgress from '@/hooks/web/useProgress'
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosError
} from 'axios'

interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

const requestInterceptors: RequestInterceptors<AxiosResponse> = {
  requestInterceptors: (config: InternalAxiosRequestConfig) => {
    NProgress.start()
    return config
  },
  requestInterceptorsCatch: (err: any) => {
    NProgress.done()
    return Promise.reject(err)
  },
  responseInterceptors: (res: AxiosResponse) => {
    NProgress.done()
    return res
  },
  responseInterceptorsCatch: (err: any) => {
    NProgress.done()
    return Promise.reject(err)
  }
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}

export {
  AxiosResponse,
  RequestInterceptors,
  RequestConfig,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosError,
  requestInterceptors
}
