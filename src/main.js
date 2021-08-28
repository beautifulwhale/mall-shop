// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import store from './store/index'
import toast from './components/Toast/index'
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
  loading: require('./assets/image/lazyload.png')
})

Vue.use(toast);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
