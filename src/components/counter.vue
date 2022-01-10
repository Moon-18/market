<template>
 <div>
<h1>{{$store.state.counter}}</h1>
<button @click="add">+</button>
<button @click="sub">-</button>
<button @click="amount(5)">+5</button>
<button @click="amount(10)">+10</button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   methods: {
       add(){
           //调用vuex中的方法，感觉像是反射
           this.$store.commit("increment")
       },
       sub(){
           this.$store.commit("decrement")
       },
       amount(x){
           //payload 负载
            // this.$store.commit("amount",x)
            //不同的提交风格
            this.$store.commit({
                type:"amount",
                x
            })
       }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
