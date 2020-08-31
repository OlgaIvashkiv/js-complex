import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {store} from "./store/store";

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
