import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import router from './router';

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
Vue.use(Vuelidate);

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
