<template>
    <div>
        <div class="card shadow-sm p-3">
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="inputEmail4">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Email">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
            <div class="d-flex justify-content-between mt-3">
                <h6 class="text-muted">Dont have an account? <a href="#" @click="changeState" style="color:#FF4800" class="text-bold">Sign Up</a></h6>
                <h6 class="text-muted">Forgot Password? <a href="#" style="color:#FF4800" class="text-bold">Recover</a></h6>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
    methods: {
        changeState() {
            eventBus.$emit('show', true);
        }
    },
}
</script>