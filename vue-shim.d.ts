/*
 * @Author: Cleveng
 * @Date: 2021-04-15 16:00:52
 * @LastEditTime: 2021-04-23 08:53:06
 * @Description: file header
 */
import Vue from 'vue'
import { Auth } from '@nuxtjs/auth-next'
import { Notyf } from 'notyf'


declare module "*.vue" {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $notyf: Notyf
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: Auth
  }
}
