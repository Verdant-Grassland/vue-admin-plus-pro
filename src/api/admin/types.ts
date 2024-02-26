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
  adminRole: number
  adminDept: number
  adminAvatar: string
  adminPhone: string
  adminEmail: string
  adminBio: string
  adminReview: string | null
  adminStatus: string
  starStatusTime: string | null
  endStatusTime: string | null
  createTime: string
  updateTime: string
  adminRemark: string | null
  adminIsdelete: number
  roleList: Role[]
  menuPerms: any
  deptList: Department[]
}

export interface Role {
  roleId: number
  roleName: string
  roleStatus: number
  roleDescription: string
  createTime: string
  updateTime: string
  roleIsdelete: number
}

export interface Department {
  deptId: number
  parentId: number
  deptName: string
  orderNum: number
  deptLeader: string
  deptPhone: string
  deptEmail: string
  deptStatus: number
  createTime: string
  updateTime: string
  deptIsdelete: number
}
