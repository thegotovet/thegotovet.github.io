import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";
import jquery from 'jquery';

global.$ = jquery;
global.Vue = Vue;
global.jQuery = jquery;

Vue.config.productionTip = false;
Vue.use(VueCarousel);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
