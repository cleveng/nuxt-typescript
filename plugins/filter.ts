import Vue from 'vue'
// 过滤器
import * as filters from '~/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))
