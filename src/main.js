import Vue from 'vue';
import VModal from 'vue-js-modal';
import moment from 'moment';
import App from './App.vue';
import router from './modules/router';
import store from './modules/store';

Vue.prototype.$moment = moment;

Vue.config.productionTip = false;
Vue.use(VModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
