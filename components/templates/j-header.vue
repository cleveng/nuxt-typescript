<template>
  <div>
    请输入你的代码
    <code>是否登录了{{ loggedIn }}</code>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  layout(): string {
    return 'basic'
  }
  get loggedIn() {
    return this.$auth.$state.loggedIn
  }
}
</script>