<template>
 <div class="tab-bar-item" @click="itemClick">
    <div  v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div> 
    <div :style="activeStyle"><slot  name="item-text"></slot></div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        // isActive:false
     }
   },methods: {
     itemClick(){
      //  console.log("clickthis")
      this.$router.push(this.path)
      // this.isActive=!this.isActive 粗浅的尝试
     }
   },computed:{
     isActive(){
       //通过来看当前活跃的路由里 有没有这个
       return this.$route.path.indexOf(this.path)!==-1
     },
     activeStyle(){
       return this.isActive?{color:this.activeColor}:{}
     }
   },
   props:{
     path:String,
     activeColor:{
        type:String,
        default:'red'
     }
   },
   components: {

   }
 }
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top:3px ;
  vertical-align: middle;
}
 .active{
     color: pink;
 }
</style>
