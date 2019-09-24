<template>
    <div>
        <div class="card shadow-sm p-3">
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control form-control-sm" id="fulname" placeholder="Full name">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control form-control-sm" id="inputEmail4" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control form-control-sm" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control form-control-sm">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control form-control-sm" id="inputZip">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Password</label>
                    <input type="password" class="form-control form-control-sm" id="password" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Confirm Password</label>
                    <input type="password" class="form-control form-control-sm" id="ConfPassword4"
                        placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        I am a Vet Doctor
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign up</button>
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
export default {
    components: {
        
    },
    methods: {
        changeState() {
            eventBus.$emit('show', false);
        }
    }
}
</script>

