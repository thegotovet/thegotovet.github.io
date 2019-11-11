import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        isLoading: false
    },
    getters: {
        userState: state => {
            return state.isLoggedIn;
        },
        isLoading: state => {
            return state.isLoading;
        }
    },
    mutations: {
        logout: function(state){
            state.isLoggedIn = false;
        },
        login: state => {
            state.isLoggedIn = true;
        },
        isLoading: (state, status) => {
            state.isLoading = status;
        }
    },
    actions: {
        signIn: ({commit}, payload) => {
            commit("isLoading", true);
            axios.post("/users/login", payload)
                .then(res => {
                    if (res.data.status) {
                        toastr.success(res.data.msg);
                        localStorage.setItem('token', res.data.token);
                        commit("isLoading", false);
                        commit("login");
                        router.push('/dashboard');
                    }
                })
                .catch(err => {
                    commit("isLoading", false);
                    
                    let error = null;
                    if (typeof(err.response) == "undefined" || typeof(err.response.data) == "undefined")
                        error = "An error occured, please contact admin";
                        
                    toastr.warning(error || err.response.data.errors || err.response.data.msg);
                });
        },
        submit: ({commit}, payload) => {
            commit("isLoading", true);
            axios.post("/users/register", payload)
                .then(res => {
                    if (res.data.status) {
                        commit("isLoading", false);
                        toastr.success(res.data.msg);
                        $("#btnlogin")[0].click();
                    }
                })
                .catch(err => {
                    commit("isLoading", false);
                    toastr.warning(
                        err.response.data.errors || err.response.data.msg
                    );
                });
        },
        logout: ({commit}) => {
            localStorage.removeItem('token');
            commit('logout');
            toastr.success("successfully logged out");
            router.push("/");
        },
        activate: ({commit}, params) => {
            axios.post(`/users/activate`, {params})
                .then(res => {
                    console.log(res)
                    if (res.data) {
                        toastr.success(res.data.msg, "Please login in to continue");
                        router.push("/signon");
                    }
                })
                .catch(err => {
                    let error = null;
                    if (typeof(err.response) == "undefined" || typeof(err.response.data) == "undefined")
                        error = "An error occured, please contact admin";
                        console.log(error || err)
                    toastr.warning(error || err.response.data.errors || err.response.data.msg);
                })
        }
    }
})