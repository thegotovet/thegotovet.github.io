<template>
    <div>
        <HomeHeader />
        <section id="login" class="container-fluid">
            <div class="row justify-content-center h-100 align-content-center">
                <div class="col-md-5"></div>
                <div class="col-md-5">
                    
                        <transition name="slide" mode="out-in">
                            <component :is="selectedComponent"></component>
                        </transition>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
import HomeHeader from "@/components/home/Homeheader.vue";
import signup from '../components/logons/signup';
import signin from '../components/logons/signin';

import { eventBus } from '../main';
export default {
    name: "signon",
    data() {
        return {
            selectedComponent: "app-sign-up"
        }
    },
    components: {
        HomeHeader,
        appSignUp : signup,
        appSignIn : signin
    },
    created() {
        eventBus.$on('show', (data) => {
            console.log(data)
            !data ? this.selectedComponent = "app-sign-in" : this.selectedComponent = "app-sign-up"
        });
    }
}
</script>

<style>
#login {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../../public/assets/img/bgs/chick.jpg") center center no-repeat;
    background-size: cover;
}

#login:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
    opacity: .6;
}

.slide-enter{
    opacity: 0;
}

.slide-enter-active{
    /* animation: slide_in .5s ease-out forwards; */
    transition: opacity .5s;
    opacity: 1;
}

.slide-leave{
    
}

.slide-leave-active{
    /* animation: slide_out 1s ease-out forwards; */
    transition: opacity 1s;
    opacity: 0;
}
</style>