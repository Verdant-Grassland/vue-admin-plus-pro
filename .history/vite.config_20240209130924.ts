import { fileURLToPath, URL } from 'node:url'

import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import { resolve } from 'path'

// https://vitejs.dev/config/
const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

export default ({
  command, mode
}: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    base: env.VITE_BASE_PATH,
    plugins: [
      Vue({
        script: {
          defineModel: true
        }
      }),
      VueJsx(),
      progress(),
      env.VITE_USE_ALL_ELEMENT_PLUS_STYLE === 'false' ? createStyleImportPlugin({
        resolves: [ElementPlusRe]
      })
    ]
  }
}
function createStyleImportPlugin(arg0: {}): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}

