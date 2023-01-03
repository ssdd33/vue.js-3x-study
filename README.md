# project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 강의 노트

[vue.js 3x 입문 강의 - 개발자의 품격](https://www.youtube.com/watch?v=b0ImUEsqaAA&t=3208s)

## 프로젝트 생성

```
vue create [프로젝트 이름]
```

## 프로젝트 초기 설정

```
- preset :  Manually select features
- features : Babel, Router, Vuex, Linter
- version of Vue.js : 3.x
- history mode
- linter / formatter config : standart
- lint features : Lint on save
- dir of config for Babel, ESLint, etc. : In package.json
```

## formatter config

vsc setting > default formatter : Prettier - Code formatter
vsc에 설정된 formatter 규칙과 프로젝트에서 설정된 formatter 규칙이 일치하지 않아서 파일 수정 후 저장시 오류 발생
-> .prettierrc에 추가로 규칙을 설정, package.json rules 추가해서 해결

```
.prettierrc

{
   "semi":false,
   "bracketSpacing":true,
   "singleQuote":true,
   "useTabs":false,
   "trailingComma":"none",
   "printWidth":80
}


package.json

 "rules": { "space-before-function-paren":"off"}

```

## 라우터 처리 및 라우팅 기법 이해 ( 강의 문서 참고 )

라우팅 처리 방법은 3가지 형태가 있습니다. 메뉴에 대한 사용자 접근 빈도 및 접근 순서를 고려해서
3가지 방법을 적절히 혼용해서 사용하면 Vue 웹앱을 최적화 할 수 있습니다.

1. preload 기능 : Vue로 구현된 웹 앱 접속시 필요한 모든 컴포넌트를 js 파일로 다운로드.사용될 것이 확실한 리소스들을 preload해야 합니다.
   preload는 브라우저에게 현재 페이지에서 필요한 리소스를 빠르게 가져오게 합니다.

```
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ]
```

2. 사용자가 메뉴에 접속하는 순간에 해당 메뉴에 대한 컴포넌트만 js파일로 다운로드

```
const routes = [
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  }
]
```

3. prefetch 기능 : 웹 앱 접속시 캐시로 다운로드하고, 사용자가 해당 메뉴 접속시 캐시에서 다운로드. 미래에 사용될 것이라고 예상되는
   리소스들을 prefetch해야 합니다. 브라우저는 미래에 사용될 리소스들을 가져와 캐시에 저장합니다. (prefetch 삭제 설정 : vue.config.js)

```
{ path : '/databinding/string' , name: 'DataBindingString', component : () => import(/* webpackPrefetch:true,
webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingString.vue')}
```

- 각각의 페이지 로딩시간은 빠르지만 라우터 개체가 많을 수록 초기 앱 로딩 속도는 느려지고 불필요한 캐시를 사용하게되는 단점이 있다.
- 화면 로딩시간이 오래 걸리는 라우터만 prefetch를 적용하여 처리할 수 있다.

## 프로젝트 폴더 구조

- views : 화면 전체에 해당하는 컴포넌트. xxxView 형태의 네이밍 규칙이 추천된다.
- components : 재사용 가능한 단위 ui + 스크립트 기능의 결합 형태의 컴포넌트
