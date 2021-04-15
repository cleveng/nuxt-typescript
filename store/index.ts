import Vuex from 'vuex'

/**
 * modules: count
 * description: 测试
 */
import count from '~/store/modules/count'

export function createStore() {
  return new Vuex.Store({
    modules: {
      count
    }
  })
}
