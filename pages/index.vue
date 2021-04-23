<!--
 * @Author: Cleveng
 * @Date: 2021-04-23 09:22:53
 * @LastEditTime: 2021-04-23 09:26:42
 * @Description: file header
-->
<template>
  <div>
    <logo />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
@Component({
  auth: false,
  components: {
    Logo
  }
})
export default class extends Vue {
  layout (): string {
    return 'basic'
  }
}
</script>
