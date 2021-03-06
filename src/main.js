import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(plugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
