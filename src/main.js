import Vue from 'vue'
import App from './App'
import store from './store'
import '../static/weui/weui.css'
import '../static/animate.css'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/cate/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: 'static/images/control_footer_home.png',
        selectedIconPath: 'static/images/control_footer_home_selected.png'
      },
      {
        pagePath: 'pages/cate/main',
        text: '分类',
        iconPath: 'static/images/control_footer_classify.png',
        selectedIconPath: 'static/images/control_footer_classify_selected.png'
      },
      {
        pagePath: 'pages/logs/main',
        text: '购物车',
        iconPath: 'static/images/control_footer_cart.png',
        selectedIconPath: 'static/images/cart_check.png'
      },
      {
        pagePath: 'pages/logs/main',
        text: '用户中心',
        iconPath: 'static/images/control_footer_user.png',
        selectedIconPath: 'static/images/control_footer_user_selected.png'
      }
      ]
    }
  }
}
