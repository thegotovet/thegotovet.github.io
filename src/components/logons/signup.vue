<template>
    <div>
        <div class="card shadow-sm p-3">
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Name</label>
                    <input v-model="userData.name"
                        type="text" class="form-control form-control-sm" id="fulname" placeholder="Full name">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input v-model.trim="userData.email" @input="$v.email.$touch()"
                        type="email" class="form-control form-control-sm" id="inputEmail4" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input v-model="userData.address"
                        type="text" class="form-control form-control-sm" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control form-control-sm">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input v-model="userData.city"
                        type="text" class="form-control form-control-sm" id="inputCity">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Password</label>
                    <input v-model.trim="userData.password"
                        type="password" class="form-control form-control-sm" id="password" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Confirm Password</label>
                    <input v-model.trim="userData.confirm_password"
                        type="password" class="form-control form-control-sm" id="ConfPassword4"
                        placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input v-model="userData.is_vet"
                    class="form-check-input" type="checkbox" id="gridCheck" value="is_vet">
                    <label class="form-check-label" for="gridCheck">
                        I am a Vet Doctor
                    </label>
                </div>
            </div>
            <button type="submit" @click.prevent="submit" class="btn btn-primary">Sign up</button>
            <div class="d-flex justify-content-between mt-3">
                <h6 class="text-muted">Already have an account? <a href="#" @click="changeState" style="color:#FF4800" class="text-bold">Log In</a></h6>
                <h6 class="text-muted">Forgot Password? <a href="#" style="color:#FF4800" class="text-bold">Recover</a></h6>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';
import { required, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            userData : {
                email: '',
                name: '',
                address: '',
                state: '',
                city: '',
                password: '',
                confirm_password: '',
                is_vet: ''
            }
        }
    },
    validations: {
        userData : {
                email: {
                    required,
                    email
                },
                name: '',
                address: '',
                state: '',
                city: '',
                password: '',
                confirm_password: '',
                is_vet: ''
            }
    },
    components: {
        
    },
    methods: {
        changeState() {
            eventBus.$emit('show', false);
        },
        submit() {

        }
    }
}
</script>

