import Vue from 'vue';
import Vuelidate from 'vuelidate';
require("dotenv").config();

import localConfig from '@/plugins/config';

global.Vue = Vue;
Vue.use(Vuelidate);

export const eventBus = new Vue();

export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.baseURL = localConfig.base_api;
        config.headers["content-type"] = "application/json";
    });
}
