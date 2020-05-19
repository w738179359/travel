// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'  由css就可以直接解决掉移动端300ms延迟的问题了
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
