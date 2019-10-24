<template>
    <div class="mt-5">
        <div class="card shadow-sm p-3">
        <form>
            <div class="form-row">
                <div class="form-group col" :class="{invalid: $v.userData.name.$error}">
                    <label for="fulname">Name</label>
                    <input v-model.lazy.trim="userData.name" @blur="$v.userData.name.$touch()"
                        type="text" class="form-control form-control-sm" id="fulname" placeholder="Full name">
                    <div class="d-flex flex-column" v-if="$v.userData.name.$error">
                        <span v-if="!$v.userData.name.required">Please put in your name</span>
                        <span v-if="!$v.userData.name.minLength">name seems too short</span>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col" :class="{invalid: $v.userData.email.$error}">
                    <label for="email">Email</label>
                    <input v-model.lazy.trim.trim="userData.email" @blur="$v.userData.email.$touch()"
                        type="email" class="form-control form-control-sm" id="email" placeholder="Email">
                    <div class="d-flex flex-column" v-if="$v.userData.email.$error">
                        <span v-if="!$v.userData.email.required">Please put in your email</span>
                        <span v-if="!$v.userData.email.email">Please provide a valid email</span>
                    </div>
                    
                </div>
                <div class="form-group col" :class="{invalid: $v.userData.phone_number.$error}">
                    <label for="phone_number">Phone Number</label>
                    <input v-model.lazy.trim.trim="userData.phone_number" @blur="$v.userData.phone_number.$touch()"
                        type="number" class="form-control form-control-sm" id="phone_number" placeholder="090*">
                    <div class="d-flex flex-column" v-if="$v.userData.phone_number.$error">
                        <span v-if="!$v.userData.phone_number.required">Please put in your phone number</span>
                        <span v-if="!$v.userData.phone_number.minLength">Please put in a valid phone</span>
                    </div>
                    
                </div>
            </div>
            <div class="form-group"  :class="{invalid: $v.userData.address.$error}">
                <label for="address">Address</label>
                <input v-model.lazy.trim="userData.address" @blur="$v.userData.address.$touch()"
                    type="text" class="form-control form-control-sm" id="address" placeholder="1234 Main St">
                <div class="d-flex" v-if="$v.userData.address.$error">
                    <span v-if="!$v.userData.address.required">Please put in your address</span>
                </div>
                
            </div>
            <div class="form-row">
                <div class="form-group col-md-6" :class="{invalid: $v.userData.state.$error}">
                    <label for="state">State</label>
                    <select id="state" class="form-control form-control-sm" 
                        @blur="$v.userData.state.$touch()" v-model="userData.state">
                        <option selected>Choose...</option>
                        <option v-for="(state, index) in states" :key="index">{{state}}</option>
                    </select>
                    <div class="d-flex" v-if="$v.userData.state.$error">
                        <span v-if="!$v.userData.state.required">Please select a state</span>
                    </div>
                    
                </div>
                <div class="form-group col-md-6" :class="{invalid: $v.userData.city.$error}">
                    <label for="city">City</label>
                    <input v-model.lazy.trim="userData.city" @blur="$v.userData.city.$touch()"
                        type="text" class="form-control form-control-sm" id="city">
                    <div class="d-flex" v-if="$v.userData.city.$error">
                        <span v-if="!$v.userData.city.required">Please put in your city</span>
                    </div>
                    
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6" :class="{invalid: $v.userData.password.$error}">
                    <label for="password">Password</label>
                    <input v-model.trim.lazy="userData.password" @blur="$v.userData.password.$touch()"
                        type="password" class="form-control form-control-sm" id="password" placeholder="****">
                    <div class="d-flex flex-column" v-if="!$v.userData.password.$error">
                        <span v-if="!$v.userData.password.required">Please put in your password</span>
                        <span v-if="!$v.userData.password.strongPassword">Password must have 1 lowercase, 1 uppercase and 8 characters long</span>
                    </div>
                </div>
                <div class="form-group col-md-6" :class="{invalid: $v.userData.confirm_password.$error}">
                    <label for="ConfPassword">Confirm Password</label>
                    <input v-model.trim.lazy="userData.confirm_password" @input="$v.userData.confirm_password.$touch()"
                        type="password" class="form-control form-control-sm" id="ConfPassword"
                        placeholder="****">
                    <div class="d-flex flex-column" v-if="$v.userData.confirm_password.$error">
                        <span v-if="!$v.userData.confirm_password.required">Please fill in the field</span>
                        <span v-if="!$v.userData.confirm_password.sameAsPassword">Passwords have to match</span>
                    </div>
                    
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input v-model.lazy.trim="userData.is_vet" class="form-check-input" type="checkbox" id="vetCheck" value="is_vet">
                    <label class="form-check-label" for="vetCheck">
                        I am a Vet Doctor
                    </label>
                </div>
            </div>
            <button type="submit" @click.prevent="submit" :disabled="$v.$invalid" class="btn btn-primary">Sign up</button>
            <div class="d-flex justify-content-between mt-3">
                <h6 class="text-muted">Already have an account? <a href="#" @click="changeState" style="color:#FF4800" class="text-bold">Log In</a></h6>
                <h6 class="text-muted">Forgot Password? <a href="#" style="color:#FF4800" class="text-bold">Recover</a></h6>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import axious from 'axios';
import { eventBus } from '../../main';
import { required, email, minLength, sameAs, helpers, numeric } from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            userData : {
                email: '',
                name: '',
                phone_number: '',
                address: '',
                state: '',
                city: '',
                password: '',
                confirm_password: '',
                is_vet: ''
            },
            states: ['Abia', 'Adamawa', 'Akwa-ibom', 'Anambra', 'Bauchi', 'Bayelsa']
        }
    },
    validations: {
        userData : {
                email: {
                    required,
                    email
                },
                name: {
                    required,
                    minLength: minLength(5)
                },
                phone_number: {
                    required,
                    minLength: minLength(11)
                },
                address: {
                    required
                },
                state: {
                    required
                },
                city: {
                    required
                },
                password: {
                    required,
                    strongPassword(password) {
                        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);
                    }
                },
                confirm_password: {
                    required,
                    sameAsPassword: sameAs('password')
                }
            }
    },
    components: {
        
    },
    methods: {
        changeState() {
            eventBus.$emit('show', false);
        },
        submit() {
            axious.post("/users/register", this.userData)
                .then(res => {
                    if (res.data.status) {
                        toastr.success(res.data.msg);
                    }
                })
                .catch(err => {
                    toastr.warning(err.response.data.errors || err.response.data.msg);
                });
        }
    },
    mounted()  {
        $('.row.h-100.justify-content-center').addClass("pt-5");
    },
}
</script>

<style scoped>
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