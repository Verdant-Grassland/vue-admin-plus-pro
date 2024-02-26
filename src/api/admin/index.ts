import axios from '@/axios'
import { AdminLoginType } from './types'

export const adminLoginApi = (data: AdminLoginType): Promise<IResponse<AdminLoginType>> => {
  return axios.post({ url: '/admin/login', data })
}

export const adminLoginOutApi = (): Promise<IResponse> => {
  return axios.get({ url: '/admin/loginOut' })
}

export const getAllAdminApi = (params: any) => {
  return axios.get({ url: '/admin/getAllAdmin', params })
}
