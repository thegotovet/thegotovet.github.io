import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';

import router from "./router";
import jquery from 'jquery';

// global.$ = jquery;
global.Vue = Vue;
// global.jQuery = jquery;

Vue.config.productionTip = false;
Vue.use(Vuelidate);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
