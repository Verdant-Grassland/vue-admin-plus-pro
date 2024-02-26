import { R } from '@/constants'
const timeout = 1000

const admin: {
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
}[] = [
  {
    adminId: 1,
    adminName: "admin",
    adminRename: "张某某",
    adminSex: 2,
    adminRole: 1,
    adminDept: 1,
    adminAvatar: "string",
    adminPhone: "13614294645",
    adminEmail: "admin@mail.com",
    adminBio: "string",
    adminStatus: "NORMAL",
    createTime: "2024-01-13T04:04:28.000+00:00",
    updateTime: "2024-01-13T04:04:28.000+00:00",
    adminIsdelete: 0,
    password: "123456",
    adminReview: null,
    starStatusTime: null,
    endStatusTime: null,
    adminRemark: null,
    roleList: [{
      roleId: 1,
      roleName: "超级管理员",
      roleStatus: 0,
      roleDescription: "超级管理员无限所有的菜单",
      createTime: "2024-01-13T04:04:28.000+00:00",
      updateTime: "2024-01-13T04:04:28.000+00:00",
      roleIsdelete: 0
    }],
    menuPerms: undefined,
    deptList: [{
      deptId: 1,
      parentId: 0,
      deptName: "沈阳市智绘蓝图文化科技有限公司",
      orderNum: 0,
      deptLeader: "张灵琳",
      deptPhone: "15142956141",
      deptEmail: "zhihuilantu2023@163.com",
      deptStatus: 0,
      createTime: "2024-01-13T04:04:28.000+00:00",
      updateTime: "2024-01-13T04:04:28.000+00:00",
      deptIsdelete: 0
    }]
  }
]

interface Role {
  roleId: number
  roleName: string
  roleStatus: number
  roleDescription: string
  createTime: string
  updateTime: string
  roleIsdelete: number
}

interface Department {
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

export default [
  {
    url: '/admin/login',
    method: 'post',
    response: (req: any) => {
      const { account, password } = req.body
      // 根据用户名、手机号或邮箱进行登录验证
      const matchedAdmin = admin.find((a) => a.adminName == account || a.adminPhone == account || a.adminEmail == account);

      if (matchedAdmin && matchedAdmin.password == password) {
        return R.ok("超级管理员登录成功").setData("adminList", matchedAdmin)
      } else {
        return R.error("超级管理员登录失败")
      }
    }
  },
  {
    url: "/admin/getAllAdmin",
    method: "get",
    response: () => {
      if (admin) {
        return R.ok("查询所有管理员成功").setData("adminList", admin)
      } else {
        return R.error("查询所有管理员失败")
      }
    }
  },
  {
    url: '/admin/loginOut',
    method: 'get',
    timeout,
    response: () => {
      if (true) {
        return R.ok("退出登录成功")
      } else {
        return R.error("退出登录失败")
      }
    }
  }
]