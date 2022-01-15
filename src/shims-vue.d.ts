/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
//解决Could not find a declaration file for module './network/request.js'.的问题
//https://blog.csdn.net/qq_44732146/article/details/119393837
declare module '*.js'
