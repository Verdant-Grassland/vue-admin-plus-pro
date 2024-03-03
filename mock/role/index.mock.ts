import { R } from '@/constants'
import Mock from 'mockjs'

const role: {
  roleId: number
  roleName: string
  roleStatus: number
  roleDescription: string
  createTime: string
  updateTime: string
  roleIsdelete: number
}[] = [
  {
    roleId: 1,
    roleName: "超级角色",
    roleStatus: 0,
    roleDescription: "超级角色无限所有的菜单",
    createTime: "@datetime",
    updateTime: "@datetime",
    roleIsdelete: Mock.Random.integer(0, 1)
  },
  {
    roleId: 2,
    roleName: "角色",
    roleStatus: 0,
    roleDescription: "角色有限部分的菜单",
    createTime: "@datetime",
    updateTime: "@datetime",
    roleIsdelete: Mock.Random.integer(0, 1)
  },
  {
    roleId: 3,
    roleName: "员工",
    roleStatus: 0,
    roleDescription: "角色有限部分的菜单",
    createTime: "@datetime",
    updateTime: "@datetime",
    roleIsdelete: Mock.Random.integer(0, 1)
  },
  {
    roleId: 4,
    roleName: "财务",
    roleStatus: 0,
    roleDescription: "财务有限部分的菜单",
    createTime: "@datetime",
    updateTime: "@datetime",
    roleIsdelete: Mock.Random.integer(0, 1)
  }
]

export { role }

export default [
  {
    url: '/role/getAllRole',
    method: 'get',
    response: () => {
      if (role) {
        return R.ok("查询所有角色数据成功").setData("roleList", role)
      } else {
        return R.error("查询所有角色数据成功")
      }
    }
  },
  {
    url: '/role/addRole',
    method: 'post',
    response: (req: any) => {
      const addRole = req.body
      const roles = role[role.length - 1]
      const roleId = roles ? roles.roleId + 1 : 1
      addRole.roleId = roleId
      addRole.createTime = new Date()
      addRole.updateTime = new Date()
      addRole.roleIsdelete = 0
      role.push(addRole)
      if (addRole) {
        return R.ok("增加角色成功")
      } else {
        return R.error("增加角色失败")
      }
    }
  },
  {
    url: '/role/deleteRole/:roleId',
    method: 'delete',
    response: (req: any) => {
      const { roleId } = req.query
      const index = role.findIndex(item => item.roleId === parseInt(roleId))
      if (index) {
        role[index].roleIsdelete = 1
        return R.ok("删除角色成功")
      } else {
        return R.error("删除角色失败")
      }
    }
  },
  {
    url: '/role/getRoleById/:roleId',
    method: 'get',
    response: (req: any) => {
      const { roleId } = req.query
      const index = role.find(item => item.roleId === parseInt(roleId))
      if (index) {
        return R.ok("按照角色编号查询数据成功").setData("role", index)
      } else {
        return R.error("未找到该角色")
      }
    }
  },
  {
    url: '/role/updateRole',
    method: 'put',
    response: (req: any) => {
      const updateRole = req.body
      updateRole.updateTime = new Date()
      const index = role.findIndex(item => item.roleId === updateRole.roleId)
      if (index) {
        role[index] = updateRole
        return R.ok("修改角色信息成功")
      } else {
        return R.error("修改角色信息成功，未找到该角色")
      }
    }
  }
]