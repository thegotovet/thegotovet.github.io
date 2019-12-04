export const state = () => ({
    isLoggedIn: false,
    isLoading: false
});

export const getters = {
    userState: state => {
        return state.isLoggedIn;
    },
    isLoading: state => {
        return state.isLoading;
    }
};

export const mutations = {
    logout: function(state){
        state.isLoggedIn = false;
    },
    login: state => {
        state.isLoggedIn = true;
    },
    isLoading: (state, status) => {
        state.isLoading = status;
    }
};

export const actions = {
    signIn({commit}, payload){
        commit("isLoading", true);
        
        this.$axios.$post("/users/login", payload)
        .then(res => {
            if (res.status) {
                toastr.success(res.msg);
                localStorage.setItem('token', res.token);
                commit("isLoading", false);
                commit("login");
                //router.push('/dashboard');
                this.$router.push('/dashboard');
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
    submit ({commit}, payload) {
        commit("isLoading", true);
        this.$axios.$post("/users/register", payload)
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
    logout({commit}) {
        localStorage.removeItem('token');
        commit('logout');
        toastr.success("successfully logged out");
        // router.push("/");
        this.$router.push("/");
    },
    activate ({commit}, params) {
        this.$axios.$post(`/users/activate`, {params})
            .then(res => {
                console.log(res)
                if (res.data) {
                    toastr.success(res.data.msg, "Please login in to continue");
                    // router.push("/signon");
                    this.$router.push("/signon");
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