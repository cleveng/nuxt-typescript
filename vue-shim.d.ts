import Vue from 'vue'

declare module '*.vue' {
  export default Vue
}

import { Auth } from '@nuxtjs/auth-next'
declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: Auth
  }
}
