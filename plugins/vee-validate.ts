import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
const { messages } = require('vee-validate/dist/locale/zh_CN.json')

import isMobilePhone from 'validator/lib/isMobilePhone'
import isEmail from 'validator/lib/isEmail'

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  })
})

extend('mobile', {
  validate (value) {
    return isMobilePhone(value, 'zh-CN')
  },
  message: '请输入正确的手机号码...'
})

extend('account', {
  validate (value) {
    return isMobilePhone(value, 'zh-CN') || isEmail(value)
  },
  message: '请输入正确的邮箱或手机号码...'
})

extend('isNotFalse', {
  validate (value) {
    return value
  },
  message: '你需要同意以下条款'
})

// extend('password', {
//   params: ['target'],
//   validate(value, { target }) {
//     return value === target
//   },
//   message: {
//     zh_CN: (field) => '确认密码与密码不一致...'
//   }
// })

extend('strong_password', {
  message: '密码必须由: 大写字母、小写字母、数字组成',
  validate: (value) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])') // (?=.*[!@#$%^&*])(?=.{8,})
    return strongRegex.test(value)
  }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
