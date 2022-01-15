import axios from 'axios'
export function request(config,success,failure){
    return new Promise((resolve,reject)=>{
        //1.创建axios的实例
        const instance =axios.create({
            baseURL:'',
            timeout:1000
        })
        //2.拦截器
        // 请求拦截
        instance.interceptors.request.use(config=>{
            console.log(config)
            //那些情况下使用
            // 1.config中的一些信息不符合服务器的要求
            // 2.每次发送网络请求时，都希望在界面显示一个请求的图标
            // 3.某些网络请求，比如登录token，必须要携带一些特殊的信息
            return config//拦截完记得返回
        },err=>{
            console.log(err)
        })
        // 响应拦截
        instance.interceptors.response.use(res=>{
            return res.data
        },err=>{
            console.log(err)
        })
        //3.发送真正的网络请求
        
        //一种方式
        // instance(config)
        // .then(res=>{
        //     success(res)
        // }).catch(err=>{
        //     failure(err)
        // })

        return instance(config)
    })
}