<template>
    <div class="mt-5">
        <div class="card shadow-sm px-5 py-4">
            <h2 class="text-muted text-center">LOGIN</h2>
            <form>
                <div class="form-row">
                    <div class="form-group col" :class="{invalid: $v.userData.email.$error}">
                        <label for="email">Email</label>
                        <input v-model.trim="userData.email" @input="$v.userData.email.$touch()"
                            type="email" class="form-control form-control-sm" id="email" placeholder="Email">
                        <div class="d-flex flex-column" v-if="$v.userData.email.$error">
                            <span v-if="!$v.userData.email.required">Please put in your email</span>
                            <span v-if="!$v.userData.email.email">Please provide a valid email</span>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col" :class="{invalid: $v.userData.password.$error}">
                        <label for="password">Password</label>
                        <input v-model.trim="userData.password" @input="$v.userData.password.$touch()"
                            type="password" class="form-control form-control-sm" id="password" placeholder="****">
                        <div class="d-flex flex-column" v-if="$v.userData.password.$error">
                            <span v-if="!$v.userData.password.required">Please put in your password</span>
                        </div>
                    </div>
                </div>
                <button type="submit" @click.prevent="submit(userData)" v-if="!isLoading" :disabled="$v.$invalid" class="btn">Sign in</button>
                <button class="btn" type="button" v-else disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
                <div class="d-flex justify-content-between mt-3">
                    <h6 class="text-muted">Dont have an account? <a href="#" @click="changeState" style="color:#FF4800" class="text-bold">Sign Up</a></h6>
                    <h6 class="text-muted">Forgot Password? <a href="#" style="color:#FF4800" class="text-bold">Recover</a></h6>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { required, email, minLength, sameAs, helpers, numeric } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            userData: {
                email: '',
                password: ''
            }
        }
    },
    validations: {
        userData : {
            email: { required, email },
            password: { required }
        }
    },
    methods: {
        changeState() {
            eventBus.$emit('show', true);   
        },
        submit(userData) {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                //this.signIn();
            } else 
                toastr.warning("please fill in the fields appropriately")
        },
        // ...mapActions([
        //     'signIn'
        // ])
    },
    mounted()  {
        $('.row.h-100.justify-content-center').removeClass("pt-5");
        $('.row.h-100.justify-content-center').css("padding-top", "6rem !important");
    },
    computed: {
        ...mapGetters([
            'userState', 'isLoading'
        ])
    }
}
</script>

<style scoped>
.btn{
    background-color: #FF4800;
    color: white;
}
.invalid input{
        border: 1px solid red;
        background-color:  #ffc9aa
    }
    .invalid label{
        color: red
    }
    span{
        color: red;
        padding: 0px 5px;
        font-size: 11px;
    }
</style>