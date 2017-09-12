// http 请求封装
import axios from 'axios'
import auth from './auth'
import router from '@/router'
import Env from '@/env'

// 创建axios实例
let http = axios.create({
    baseURL: Env.serverBasicUrl,            // 设置请求基础路径
    timeout: 30000,
});

// request拦截器
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['X-Token'] = auth.getToken();     // 设置 token

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// respone拦截器
http.interceptors.response.use(function (response) {
    // Do something with response data
   if(response.data.ServerNo == 300){                       // 设置当响应码为300 时候，自动跳转到 登录页面

       router.replace('/login');
   }

    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default http;
