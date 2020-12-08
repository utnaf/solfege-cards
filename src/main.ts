import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import store from "@/store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
