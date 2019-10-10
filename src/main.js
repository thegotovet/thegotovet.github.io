import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VS2 from 'vue-script2';

import router from "./router";
import config from './config';
global.Vue = Vue;

axios.defaults.baseURL = config.base_api;
axios.defaults.headers['content-type'] = 'application/json';
axios.defaults.headers["accepts"] = "application/json";

axios.interceptors.request.use(conf => {
  console.log(conf.data);
  return conf;
});

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VS2);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
