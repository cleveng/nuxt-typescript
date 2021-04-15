<template>
  <div>
    <j-header></j-header>
    <nuxt />
    <j-footer></j-footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { JHeader, JFooter } from '~/components/templates'
@Component({
  components: {
    JHeader,
    JFooter
  }
})
export default class basic extends Vue {}
</script>