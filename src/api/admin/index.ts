import axios from '@/axios'
import { AdminLoginType, Admin } from './types'

export const adminLoginApi = (data: AdminLoginType): Promise<IResponse<AdminLoginType>> => {
  return axios.post({ url: '/admin/login', data })
}

export const adminRegisterApi = (admin: Partial<Admin>): Promise<IResponse> => {
  return axios.post({ url: '/admin/register', data: admin })
}
export const adminLoginOutApi = (): Promise<IResponse> => {
  return axios.get({ url: '/admin/loginOut' })
}

export const getAllAdminApi = (params: any) => {
  return axios.get({ url: '/admin/getAllAdmin', params })
}
