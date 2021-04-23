/*
 * @Author: Cleveng
 * @Date: 2021-04-23 08:58:35
 * @LastEditTime: 2021-04-23 08:59:08
 * @Description: file header
 */
import { Module, VuexMutation, VuexModule } from 'nuxt-property-decorator'

@Module({
  name: 'count',
  namespaced: true
})

/**
 * VuexMutation ( 避免与'vuex-class'包的存在的变量(Mutation)发生冲突 )
 */
export default class extends VuexModule {
  count: string = '这是一个测试代码'

  @VuexMutation
  change (delta: string) {
    this.count = delta
  }
}
