<template>
 <div>
      <tab-bar>
      <tab-bar-item path="home" activeColor="red">
       <template v-slot:item-icon><img src="@/assets/img/icons/airport.svg" alt=""></template>
       <template v-slot:item-icon-active><img src="@/assets/img/icons/bakery.svg" alt=""></template>
       <template v-slot:item-text ><div>首页</div></template>
      </tab-bar-item>

      <tab-bar-item  path="category" activeColor="blue">
        <template v-slot:item-icon><img src="@/assets/img/icons/bank.svg" alt=""> </template>
        <template v-slot:item-icon-active><img src="@/assets/img/icons/bar.svg" alt=""></template>
        <template v-slot:item-text ><div>分类</div></template>
      </tab-bar-item>
      
      <tab-bar-item  path="cart" activeColor="green">
        <template v-slot:item-icon><img src="@/assets/img/icons/barrier.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/icons/basketball.svg" alt=""></template>
        <template v-slot:item-text ><div>购物车</div></template>
      </tab-bar-item>

      <tab-bar-item  path="profile">
        <template v-slot:item-icon><img src="@/assets/img/icons/bus.svg" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/icons/cafe.svg" alt=""></template>
        <template v-slot:item-text ><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
 </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

 export default {
    name:"MainTabBar",
   data () {
     return {

     }
   },
   components: {
       TabBar,
       TabBarItem
   }
 }
</script>

<style>

 
</style>
