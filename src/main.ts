import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {request} from "./network/request.js"

const app = createApp(App)

app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')

request({
  URL:'',
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})