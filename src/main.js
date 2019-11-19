import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import axios from "axios";
import VS2 from "vue-script2";

import router from "./router";
import config from "./config";
import {store} from "./store/store";
global.Vue = Vue;
Vue.use(Vuelidate);

axios.defaults.baseURL = config.base_api;
axios.defaults.headers["content-type"] = "application/json";
axios.defaults.headers["accepts"] = "application/json";

axios.interceptors.request.use(conf => {
  return conf;
});

Vue.config.productionTip = false;
Vue.use(VS2);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
  validations: {}
}).$mount("#app");
