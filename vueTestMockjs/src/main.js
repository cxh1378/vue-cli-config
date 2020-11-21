import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/plugins/plugins'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import mock from '@/mock'

// Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
