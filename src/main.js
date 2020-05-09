import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './common/rem.js'
import '@/assets/css/base2.css'
import './vant/vant'
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
