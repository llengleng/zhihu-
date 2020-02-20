import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$http = axios;
Vue.use(axios,VueAxios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
