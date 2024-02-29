import { R } from "@/constants"
import Mock from 'mockjs'

const dept: {
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
}[] = [
  {
    deptId: 1,
    parentId: 0,
    deptName: "北京市某某科技有限公司",
    orderNum: 0,
    deptLeader: "张田某",
    deptPhone: "13888888888",
    deptEmail: "admin2023@163.com",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1)
  },
  {
    deptId: 2,
    parentId: 10,
    deptName: "技术部",
    orderNum: 10,
    deptLeader: "a",
    deptPhone: "a",
    deptEmail: "a",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1),
  },
  {
    deptId: 3,
    parentId: 11,
    deptName: "财务部",
    orderNum: 11,
    deptLeader: "b",
    deptPhone: "b",
    deptEmail: "b",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1),
  },
  {
    deptId: 4,
    parentId: 12,
    deptName: "设计部",
    orderNum: 12,
    deptLeader: "c",
    deptPhone: "c",
    deptEmail: "c",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1),
  },
  {
    deptId: 5,
    parentId: 13,
    deptName: "宣传部",
    orderNum: 13,
    deptLeader: "d",
    deptPhone: "d",
    deptEmail: "d",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1),
  },
  {
    deptId: 6,
    parentId: 14,
    deptName: "业务部",
    orderNum: 14,
    deptLeader: "e",
    deptPhone: "e",
    deptEmail: "e",
    deptStatus: Mock.Random.integer(0, 1),
    createTime: "@datetime",
    updateTime: "@datetime",
    deptIsdelete: Mock.Random.integer(0, 1),
  }
]

export default [
  {
    url: '/dept/getAllDept',
    method: 'get',
    response: () => {
      if (dept) {
        return R.ok("查询所有部门数据成功").setData("deptList", dept)
      } else {
        return R.error("查询所有部门数据成功")
      }
    }
  },
  {
    url: '/dept/addDept',
    method: 'post',
    response: (req: any) => {
      const addDept = req.body
      const depts = dept[dept.length - 1]
      const deptId = depts ? depts.deptId + 1 : 1
      addDept.deptId = deptId
      addDept.createTime = new Date()
      addDept.updateTime = new Date()
      addDept.deptIsdelete = 0
      dept.push(addDept)
      if (addDept) {
        return R.ok("增加部门成功")
      } else {
        return R.error("增加部门失败")
      }
    }
  },
  {
    url: '/dept/deleteDept/:deptId',
    method: 'delete',
    response: (req: any) => {
      const { deptId } = req.query
      const index = dept.findIndex(item => item.deptId === parseInt(deptId))
      if (index) {
        dept[index].deptIsdelete = 1
          return R.ok("删除部门成功")
      } else {
        return R.error("删除部门失败")
      }
    }
  },
  {
    url: '/dept/getDeptById/:deptId',
    method: 'get',
    response: (req: any) => {
      const { deptId } = req.query
      const index = dept.find(item => item.deptId === parseInt(deptId))
      if (index) {
        return R.ok("按照部门编号查询数据成功").setData("dept", index)
      } else {
        return R.error("未找到该部门")
      }
    }
  },
  {
    url: '/dept/updateDept',
    method: 'put',
    response: (req: any) => {
      const updateDept = req.body
      updateDept.updateTime = new Date()
      const index = dept.findIndex(item => item.deptId === updateDept.deptId)
      if (index) {
        dept[index] = updateDept
          return R.ok("修改部门信息成功")
      } else {
        return R.error("修改部门信息成功，未找到该部门")
      }
    }
  }
]