import Vue from "vue";
import Vuelidate from "vuelidate";

//import config from "../config";

export const eventBus = new Vue();
global.Vue = Vue;
Vue.use(Vuelidate);