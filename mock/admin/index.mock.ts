import { R } from '@/constants'
import Mock from 'mockjs'
import { Md5 } from 'ts-md5'
import { AdminReview, AccountStatus } from './status'
import { utils } from './utils'
import { dept } from '../dept/index.mock'
import { role } from '../role/index.mock'
const timeout = 1000

const admin: {
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
  adminReview: number
  adminStatus: number
  starStatusTime: string | null
  endStatusTime: string | null
  createTime: string
  updateTime: string
  adminRemark: string | null
  adminIsdelete: number
  roleId: number
  menuPerms: any
  deptId: number
}[] = [
  {
    adminId: 1,
    adminName: "admin",
    adminRename: "张某某",
    adminSex: Mock.Random.integer(1, 2),
    adminRole: 1,
    adminDept: 1,
    adminAvatar: "string",
    adminPhone: "13888888888",
    adminEmail: "admin@mail.com",
    adminBio: "string",
    adminStatus: 0,
    createTime: "@datetime",
    updateTime: "@datetime",
    adminIsdelete: Mock.Random.integer(0, 1),
    password: "f4fa310241d3e894ca3d47bda9c2fd9f",
    adminSalt: "24F1D1599D538624",
    adminReview: 0,
    starStatusTime: null,
    endStatusTime: null,
    adminRemark: null,
    roleId: 1,
    menuPerms: undefined,
    deptId: 1
  }
]

const admins = admin.map(admin => {
  const { roleId, deptId, ...admins } = admin;
  const roles = role.find(role => role.roleId == admin.roleId)
  const depts = dept.find(dept => dept.deptId == admin.deptId)
  return {
    ...admins,
    deptList: [depts],
    roleList: [roles]
  }
})

export default [
  {
    url: '/admin/login',
    method: 'post',
    response: (req: any) => {
      const { account, password } = req.body
      // 根据用户名、手机号或邮箱进行登录验证
      const matchedAdmin = admins.find((a) => a.adminName == account || a.adminPhone == account || a.adminEmail == account)
      let token
      if (matchedAdmin && matchedAdmin.password == Md5.hashStr(password + matchedAdmin.adminSalt)) {
        if (matchedAdmin.adminId == 1) {
          token = "eyJhbGciOiJIUzUxMiJ9.admin"
          return R.ok("超级管理员登录成功").setData("admin", matchedAdmin).setData("token", token)
        } else {
          // return R.error("超级管理员登录失败")
          const statusMap: Map<number, string> = new Map()
          statusMap.set(AdminReview.APPROVED.statusCode, "管理员登录成功")
          statusMap.set(AdminReview.FAILED.statusCode, "管理员登录失败，请你联系超级管理员")
          statusMap.set(AdminReview.CANCELED.statusCode, "管理员登录失败，你的账号未注册")
          statusMap.set(AdminReview.FROZEN.statusCode, "你的账号已被永久冻结，请你联系超级管理员")
          const statusMessage = statusMap.get(matchedAdmin?.adminReview as number)
          if (statusMessage != null) {
            if (matchedAdmin?.adminReview == AdminReview.APPROVED.statusCode) {
              const matchedAdmin = admin.find((a) => a.adminName == account || a.adminPhone == account || a.adminEmail == account)
              if (matchedAdmin) {
                token = "eyJhbGciOiJIUzUxMiJ9.employee"
                return R.ok(statusMessage).setData("admin", matchedAdmin).setData("token", token)
              } else {
                return R.error("管理员登录失败")
              }
            } else if (matchedAdmin?.adminReview == AdminReview.FAILED.statusCode || matchedAdmin?.adminReview == AdminReview.CANCELED.statusCode) {
              return R.error(statusMessage).setData("admin", matchedAdmin)
            } else if (matchedAdmin?.adminReview == AccountStatus.FROZEN.statusCode) {
              if (matchedAdmin?.adminReview == AccountStatus.FROZEN.statusCode) {
                return R.error(statusMessage).setData("admin", matchedAdmin)
              } else {
                // 计算冻结时间
                const duration = matchedAdmin.endStatusTime.getTime() - matchedAdmin.starStatusTime.getTime()
                const days = Math.floor(duration / (1000 * 60 * 60 * 24))
                const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((duration % (1000 * 60)) / 1000)
                return R.error(`您的账号已被临时冻结，剩余时间 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒，会自动解冻`).setData("admin", admin)
              }
            } else {
              return R.error("管理员登录失败")
            }
          }
        }
      } else {
        return R.error("您的账号或密码错误")
      }
      return R.error("管理员登录失败") 
    }
  },
  {
    url: '/admin/logout',
    method: 'get',
    timeout,
    response: () => {
      if (true) {
        return R.ok("退出登录成功")
      } else {
        return R.error("退出登录失败")
      }
    }
  },
  {
    url: "/admin/getAllAdmin",
    method: "get",
    response: () => {
      if (admins) {
        return R.ok("查询所有管理员数据成功").setData("adminList", admins);
      } else {
        return R.error("查询所有管理员数据失败")
      }
    }
  },
  {
    url: "/admin/getAdminPage/:page/:pageSize",
    method: "get",
    response: (req: any) => {
      const { page, pageSize, keyword } = req.query;
      let admin = admins;
      
      // 模糊查询
      if (keyword) {
        admin = admin.filter((admin) =>
          admin.adminName.includes(keyword) ||
          admin.adminPhone.includes(keyword) ||
          admin.adminEmail.includes(keyword)
        );
      }

      // 分页
      const total = admin.length
      const pages = Math.ceil(total / pageSize)
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      const adminList = admin.slice(startIndex, endIndex);
      const record: Record<string, any> = {
        total: total,
        pageSize: pageSize,
        pages: pages,
        page: page,
        rows: adminList
      }
      return R.ok("查询所有管理员分页数据成功").setData(record);
    }
  },
  {
    url: '/admin/register',
    method: 'post',
    response: (req: any) => {
      const { password, confirmPassword, ...addAdmin } = req.body;
      if (password !== confirmPassword) {
        return R.error("两次输入的密码不一致");
      }
      const admins = admin[admin.length - 1]
      const adminId = admins ? admins.adminId + 1 : 1
      addAdmin.adminId = adminId
      const passwords = Md5.hashStr(addAdmin.password)
      const salt = utils.salt()
      addAdmin.password = passwords
      addAdmin.adminSalt = salt
      addAdmin.createTime = new Date()
      addAdmin.updateTime = new Date()
      admin.push(addAdmin)
      if (addAdmin) {
        return R.ok("注册管理员成功")
      } else {
        return R.error("注册管理员失败")
      }
    }
  },
  {
    url: '/admin/deleteAdmin/:adminId',
    method: 'delete',
    response: (req: any) => {
      const { adminId } = req.query
      const index = admin.findIndex(item => item.adminId === parseInt(adminId))
      if (index) {
        admin[index].adminIsdelete = 1;
        return R.ok("注销管理员成功")
      } else {
        return R.error("注销管理员失败")
      }
    }
  },
  {
    url: '/admin/getAdminById/:adminId',
    method: 'get',
    response: (req: any) => {
      const { adminId } = req.query
      const index = admin.find(item => item.adminId === parseInt(adminId))
      if (index) {
        return R.ok("按照管理员编号查询数据成功").setData("admin", index)
      } else {
        return R.error("未找到该管理员")
      }
    }
  },
  {
    url: '/admin/updateAdmin',
    method: 'put',
    response: (req: any) => {
      const updateAdmin = req.body
      updateAdmin.updateTime = new Date()
      const index = admin.findIndex(item => item.adminId === updateAdmin.adminId)
      if (index) {
        admin[index] = updateAdmin
        return R.ok("修改管理员信息成功")
      } else {
        return R.error("修改管理员信息成功，未找到该管理员")
      }
    }
  }
]