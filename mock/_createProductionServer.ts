import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./**/*.mock.ts', {
  import: 'default',
  eager: true //正在加载
})

const mockModules: any[] = []
Object.keys(modules).forEach(async (key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any))
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
