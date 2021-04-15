<template>
  <footer class="footer">
    <div class="container py-5 border-bottom">
      <div class="row pt-5">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <img class="mb-3" src="@/assets/images/logo.png" alt="" width="103" />
          <ul class="list-inline text-muted">
            <li class="list-inline-item">
              <a class="reset-anchor" href="#">
                <i class="mdi mdi-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="reset-anchor" href="#">
                <i class="mdi mdi-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="reset-anchor" href="#">
                <i class="mdi mdi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h4>使用框架</h4>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-2">
              <b-link href="https://bootstrap-vue.js.org/"> Bootstrap </b-link>
            </li>
            <li class="mb-2">
              <b-link href="https://cn.vuejs.org/"> VueJs </b-link>
            </li>
            <li class="mb-2">
              <b-link href="https://www.npmjs.com/package/vue-totop"> Vue-totop </b-link>
            </li>
            <li class="mb-2">
              <b-link href="https://www.npmjs.com/package/vue-moment"> vue-moment </b-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h4>帮助</h4>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-2"><a class="reset-anchor" href="#">FAQ</a></li>
            <li class="mb-2"><a class="reset-anchor" href="#">Term & conditions</a></li>
            <li class="mb-2"><a class="reset-anchor" href="#">Reporting</a></li>
            <li class="mb-2"><a class="reset-anchor" href="#">Documentation</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h4>又拍云推荐</h4>
          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-2">
              <b-link href="https://console.upyun.com/register/?invite=rJZSo4gPU">
                注册有礼
              </b-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <b-container class="py-4">
      <b-row class="text-center">
        <b-col lg="6" class="p-lg-0 text-lg-start">
          <p class="text-muted fs-sm mb-0">
            <b-link href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow">
              粤ICP备{{ hostname.icp }}号
            </b-link>
            <b-link
              v-if="hostname.sicp"
              class="ms-2"
              :href="getGovLink"
              target="_blank"
              rel="nofollow"
            >
              公网安备{{ hostname.sicp }}
            </b-link>
          </p>
        </b-col>
        <b-col lg="6" class="p-lg-0">
          <b-link
            class="text-info justify-content-lg-end d-flex align-items-center"
            href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
          >
            <span class="fs-sm me-1">本网站由</span>
            <img class="img-fluid" style="height: 19px" src="@/assets/images/upai_logo8.svg" />
            <span class="fs-sm ms-1">提供CDN加速/云存储服务</span>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
interface HostName {
  readonly title: string
  readonly domain: string
  readonly icp: string
  readonly sicp: string
}
@Component
export default class JFooter extends Vue {
  hostname: HostName = {
    title: 'cakioe',
    domain: 'cakioe.com',
    icp: '20009363',
    sicp: '44010602005778'
  }
  private govLink: string = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode='
  get getGovLink(): string {
    const { sicp } = this.hostname
    return this.govLink + `${sicp}`
  }
}
</script>