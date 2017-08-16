// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import { sync } from 'vuex-router-sync';
import store from '@/store';
import apiSet from '@/api';
import formatDate from '@/plugins/formatDate';
import App from './App';
import router from './router';

sync(store, router);

Vue.config.productionTip = false;
Vue.prototype.$config = process.env;
Vue.prototype.$formatDate = formatDate;
Vue.prototype.$apis = apiSet;
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
