import { createStore } from 'vuex'
//大管家 类似session 和 spring里的IOC
export default createStore({
  state: {
    //对象
    test:"公共的对象",
    counter:100,
    students:[
      {name:"张三",age:18},
      {name:"李四",age:19},
      {name:"王五",age:20},
      {name:"赵六",age:21}
    ] 
  },
  mutations: {
    //写一些方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    //不同的提交风格
    //1.
    // amount(state,x){
    //   state.counter+=x
    // }
    amount(state,payload){
      console.log(payload)
      state.counter+=payload.x
    }
  },
  actions: {

  },
  getters:{
    //写死
    age19(state){
      return state.students.filter(s=>s.age>19)
    },
    //动态
    agex(state){
      return function(x: number){
        return state.students.filter(s=>s.age>x)
      }
    }
  },
  modules: {

  }
})
