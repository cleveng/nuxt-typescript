module.exports = {
  root: true,
  globals: {
    process: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      legacyDecorators: true,
      impliedStrict: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue', 'babel', 'prettier'],
  rules: {
    // 使用2个空格缩进
    indent: [
      'off',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止扩展原生属性
    'no-extend-native': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['error', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 代码中可出现console
    'no-console': 'off',
    // 正则中可以出现控制字符
    'no-control-regex': 'off',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        // 可以声明未使用的h，方便jsx
        argsIgnorePattern: 'h'
      }
    ],
    // 行注释必须在行上面
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    // 一个函数最多能指定4个参数
    'max-params': [
      'error',
      {
        max: 4
      }
    ],
    // 构造函数必须首字母大写
    // "new-cap":['error', {"newIsCap": true} ],
    // vue 属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    // 一行最多几个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 组件名称必须是大驼峰
    'vue/name-property-casing': ['error', 'PascalCase'],
    // vue Html元素单标签关闭方式
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 组件在template内必须使用 kebab-case 格式
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    // template 内必须使用 ===
    'vue/eqeqeq': 'error',
    // scss deep 写法必须时 ::v-deep , 需要在这一处将 :v-deep 添加为例外
    // "selector-pseudo-element-no-unknown":["error","v-deep"],
    // 允许使用v-html
    'vue/no-v-html': 0,
    // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
    'no-implied-eval': 'error',

    // 格式化函数时， 函数名称或function关键字与开始参数之间允许有空格。
    'space-before-function-paren': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    // 新函数换行
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true
    }],
    //
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0
    }]
  },

  // 单元测试相关
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true
    }
  }]
}
