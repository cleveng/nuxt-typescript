import webpack from 'webpack'

export default {
  mode: 'universal',
  env: {
    BOOTSTRAP_VUE_NO_WARN: true,
    WS_URL: process.env.WS_URL || 'http://localhost:10284'
  },
  target: 'server',
  router: {
    middleware: ['auth'],
    scrollBehavior() {
      return {
        x: 0,
        y: 0
      }
    },
    prefetchLinks: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cakioe' || process.env.npm_package_name,
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/iview/3.5.5-rc.1/styles/iview.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.21.2/bootstrap-vue.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.21.2/bootstrap-vue-icons.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.1/theme-chalk/index.min.css'
    }
    ],
    script: [{
      src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js'
    },
    {
      src: 'https://cdn.bootcdn.net/ajax/libs/device.js/0.2.7/device.min.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/cartzilla/app.scss'],
  loading: {
    color: '#3B8070'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~plugins/element-ui',
    ssr: true
  },
  {
    src: '~plugins/bootstrap',
    ssr: true
  },
  {
    src: '~plugins/vee-validate',
    ssr: false
  },
  {
    src: '~plugins/clipboard',
    ssr: false
  },
  {
    src: '~/plugins/vuex-persist',
    ssr: false
  },
  {
    src: '~/plugins/notyf',
    ssr: false
  },
  {
    src: '~/plugins/filter',
    ssr: true
  }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // 自动扫描以及导入组件
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    [
      '@nuxtjs/stylelint-module',
      {
        fix: true
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  auth: {
    // fetchUserOnLogin: true,
    strategies: {
      local: {
        token: {
          property: 'access_token',
          required: true,
          type: 'Bearer'
        },
        endpoints: {
          login: {
            url: '/oauth/login',
            method: 'post'
          },
          // 登录接口
          user: {
            url: '/user/profile',
            method: 'get',
            propertyName: false
          },
          // 获取用户信息
          logout: false
        },
        autoFetchUser: false,
        watchLoggedIn: true,
        rewriteRedirects: false,
        resetOnError: true
      },
      cookie: {
        options: {
          maxAge: 60 * 60 * 24 * 7
        }
      },
      localStorage: false
    },
    redirect: {
      login: '/',
      // 登陆页面，进入需要权限的页面，没有本地 token 就会往这里跳
      logout: '/',
      // 退出后往这里跳
      // callback: '/',
      // 第三方平台 OAuth2 使用的重定向回来的地址，这里用不到
      home: '/dashboard'
      // 个人主页，如果配置 auth: 'guest' 时，已登录用户访问该页面会跳到该地址（也就是限于访客）
    },
    plugins: []
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // prefix: '/',
    credentials: true
  },
  proxy: {
    '/v1/': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/v1/': '/v1/',
        changeOrigin: true
      }
    },
    '/v0/': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/v0/': '/v0/',
        changeOrigin: true
      }
    },
    '/oauth': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/oauth/': '/oauth/',
        changeOrigin: true
      }
    },
    '/u1': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/u1/': '/u1/',
        changeOrigin: true
      }
    },
    '/passport': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/passport/': '/passport/',
        changeOrigin: true
      }
    },
    '/socket.io': {
      target: 'http://localhost:8000',
      pathRewrite: {
        '^/socket.io/': '/socket.io/',
        changeOrigin: true
      }
    },
    '/public/': {
      target: 'http://localhost:10284',
      pathRewrite: {
        '^/public/': '/public/',
        changeOrigin: true
      }
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'zh_CN'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  extends: ['@nuxtjs/eslint-config-typescript'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    vendor: ['axios', 'vee-validate', 'view-design'],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        _: 'lodash'
      })
    ]
  }
}
