import { RouteRecordRaw } from 'vue-router'

function getParentPaths(value: string, routes: RouteRecordRaw[], key = 'path') {
  function dfs(routes: RouteRecordRaw[], value: string, parents: string[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i]
      if (item[key] === value) return parents
      if (!item.children || !item.children.length) continue
      parents.push(item.path)
      if (dfs(item.children, value, parents).length) return parents
      parents.pop()
    }
    return []
  }
  return dfs(routes, value, [])
}

export { getParentPaths }
