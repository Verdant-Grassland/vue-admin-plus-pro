import { fileURLToPath, URL } from 'node:url'

import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import { resolve } from 'path'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import EslintPlugin from 'vite-plugin-eslint'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
        resolves: [ElementPlusResolve()],
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle(name) {
            if (name === 'click-outside') {
              return ''
            }
            return `element-plus/es/components/${name.replace(/^el-/, '')}/style/css`
          },
        }]
      }): undefined,
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
      }),
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: false,
        include: [resolve(__dirname, 'src/locales/**')]
      }),
      createSvgIconsPlugin({
        iconDirs: [pathResolve()]
      })
    ]
  }
}
