<template>
    <div class="container padding_top">
        <h5>if not redirected click <a @click.prevent="activate(params)">here</a></h5>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    created() {
        
        if (!this.$route.params.id || !this.$route.params.token){
            this.$router.push("/");
        }

        this.params.id = this.$route.params.id;
        this.params.token = this.$route.params.token;

        this.activate(this.params);
    },
    data() {
        return {
            params: {
                id: '',
                token: ''
            }
            
        }
    },
    methods: {
        ...mapActions([
            'activate'
        ])
    },
}
</script>

<style scoped>
.padding_top{
    padding-top: 100px;
    min-height: 30vh;
}
h5{
    font-size: 1.2rem;
} 
h5 a{
    color: blue !important;
    text-decoration: underline !important;
    cursor: pointer;
}
h5 a:hover{
    color: blue !important;
    text-decoration: underline !important;
    font-size: 1.3rem;
}
.nav-link{
    color: black !important;
}
</style>