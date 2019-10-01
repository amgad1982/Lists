import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import _ from 'lodash'
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: _ });
new Vue({
  render: h => h(App),
}).$mount('#app')
