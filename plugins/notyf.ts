import { Notyf } from 'notyf'
import Vue from 'vue'

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'top'
  }
})

Object.defineProperty(Vue.prototype, '$notyf', { value: notyf })
