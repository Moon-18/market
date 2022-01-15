# market

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

流程 
1.划分目录结构
assets放静态资源
css
  normalize.css一个初始化页面的css
  base.css
js
img

公共组件的放components里
common放一直以来能用的
content放当前业务相关的

具体的视图放view里

common公共的js文件
const.js放常量
utils.js公共方法

router放路由

store放vuex相关

network网络相关

