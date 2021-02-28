import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
//配置根路径
$http.baseUrl = 'https://www.uinav.com'
//请求拦截器
$http.beforeRequest=function(option){
  uni.showLoading({
    title:"数据加载中"
  })
}
//请求完成之后
$http.afterRequest=function(option){
uni.hideLoading()
}

uni.showMsg=function( title='数据加载失败...' ,  duration=1500){
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
