import viewGenerator from './plop/view/prompt.js'
import componentGenerator from './plop/component/prompt.js'

export default function (plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}
