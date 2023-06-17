import slideList from './package/utils/list.js'
import slideItem from './package/utils/item.js'
function install(Vue) {
  Vue.use(slideItem)
  Vue.use(slideList)
}
export {
  slideItem,
  slideList
}
export default install