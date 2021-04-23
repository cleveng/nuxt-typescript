<!--
 * @Author: Cleveng
 * @Date: 2021-04-23 08:31:47
 * @LastEditTime: 2021-04-23 09:27:59
 * @Description: file header
-->
<template>
  <div>
    {{ message }}
    <code> state: {{ stateCount2 }} </code>
    <b-button @click="HandleChange">
      改变
    </b-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

/**
 * namespace 获取到对应的 modules
 * args: modules/name
 * 具体使用请参考: https://github.com/ktsn/vuex-class
 */
const stateCount = namespace('count')

@Component
export default class extends Vue {
  message: String = 'hello world'
  @stateCount.State('count') stateCount2
  mounted () {}
  @stateCount.Mutation('change') change

  HandleChange (): void {
    this.change('对。没错这就是测试代码')
  }
}
</script>
