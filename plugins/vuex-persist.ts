/*
 * @Author: Cleveng
 * @Date: 2021-04-23 08:49:14
 * @LastEditTime: 2021-04-23 08:49:23
 * @Description: file header
 */
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'vuex',
    // The key to store the state on in the storage provider.
    storage: window.localStorage
    // or window.sessionStorage or localForage
  }).plugin(store)
}
