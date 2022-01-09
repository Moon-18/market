<template>
  <div id="nav">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
   </div>
  
</template>

<script>

import MainTabBar from '@/components/MainTabBar'
export default {
  name:'nav',
  components:{
    MainTabBar
  }
}
</script>
<style>
/* 引用初始样式 */
@import "./assets/css/base.css";
</style>
