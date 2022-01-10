<template>
  <div id="nav">
    
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    {{$store.state.test}}
    <div>
      {{$store.getters.age19}}
    </div>
    <div>{{$store.getters.agex(18)}}</div>
   <div>
     <counter></counter>
   </div>
   </div>
</template>

<script>

import MainTabBar from '@/components/MainTabBar'
import counter from '@/components/counter'

export default {
  name:'nav',
  components:{
    MainTabBar,
    counter
  }
}
</script>
<style>
/* 引用初始样式 */
@import "./assets/css/base.css";
</style>
