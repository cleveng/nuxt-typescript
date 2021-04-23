/*
 * @Author: Cleveng
 * @Date: 2021-04-19 17:31:00
 * @LastEditTime: 2021-04-21 13:41:42
 * @Description: file header
 */
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class mixinClipboard extends Vue {
  onCopy (): void {
    this.$notyf.success('复制成功')
  }

  onError (): void {
    this.$notyf.success('复制失败')
  }
}
