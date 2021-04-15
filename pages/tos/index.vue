<template>
  <div>请输入你的代码</div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  layout(): string {
    return 'basic'
  }
}
</script>