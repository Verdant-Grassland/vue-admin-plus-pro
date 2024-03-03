import { Dept } from '../dept/types'
import { Role } from '../role/types'

export interface AdminLoginType {
  adminName: string
  adminPhone: string
  adminEmail: string
  password: string
}

export interface AdminType {
  adminName: string
  adminPhone: string
  adminEmail: string
  password: string
  roleId: number
  roleName: string
}

export interface Admin {
  adminId: number
  adminName: string
  adminRename: string
  adminSex: number
  password: string
  adminSalt: string
  adminRole: number
  adminDept: number
  adminAvatar: string
  adminPhone: string
  adminEmail: string
  adminBio: string
  adminReview: string | null
  adminStatus: number
  starStatusTime: string | null
  endStatusTime: string | null
  createTime: string
  updateTime: string
  adminRemark: string | null
  adminIsdelete: number
  roleList: Role[]
  menuPerms: any
  deptList: Dept[]
}
