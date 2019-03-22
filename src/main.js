import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VDistpicker from 'v-distpicker'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('v-distpicker', VDistpicker)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
