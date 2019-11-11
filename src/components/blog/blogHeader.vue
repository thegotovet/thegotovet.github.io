<template>
    <nav class="blog-menu navbar navbar-expand-md navbar-transparant animated fadeIn">
        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h3 class="mx-3">
                <router-link to="/" class="nav-item" active-class="active" exact><a class="nav-link">thegotovet</a> </router-link>
            </h3>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="ti-menu-alt"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <router-link to="/blog" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Home</a> </router-link>
                    <router-link to="#" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">News</a> </router-link>
                    <router-link to="#" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Dogs</a> </router-link>
                    <router-link to="#" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Cats</a> </router-link>
                    <router-link to="#" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Livestock</a> </router-link>
                    <router-link to="#" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Others</a> </router-link>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        $(window).scroll(function () {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.blog-menu').addClass('navbar-light fadeInDown fixed-top');
                $('.blog-menu').removeClass('navbar-transparant fadeIn');
            } else {
                $('.blog-menu').addClass('.navbar-transparant fadeIn');
                $('.blog-menu').removeClass('navbar-light fadeInDown fixed-top');
            }
        });
    },
}
</script>

<style scoped>
    .nav-link{
        color: rgba(0,0,0,.5)!important;
    }
    .navbar {
        padding: 15px 10px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        transition: 0.5s;
    }

    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }

    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0;
    }
    #sidebarCollapse {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    }
    #sidebarCollapse:hover{
        border: 1px solid rgba(255, 75, 0, 1);
    }

    #sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 2px auto;
    display: block;
    background: rgb(255, 75, 0);
    border: 1px solid rgba(255, 75, 0, .5);
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
}
#sidebarCollapse.active span:first-of-type {
    margin: 0 auto;
    /* rotate first one */
    transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse.active span:nth-of-type(2) {
    
    margin:0 auto;
    /* second one is not visible */
    opacity: 0;
}
#sidebarCollapse.active span:last-of-type {
    
    margin: 0 auto;
    /* rotate third one */
    transform: rotate(-45deg) translate(1px, -1px);
}
#sidebarCollaps span {
    /* no rotation */
    transform: none;
    margin: 2px;
    /* all bars are visible */
    opacity: 1;
    margin: 5px auto;
}
li.active a{
    color : rgba(255, 75, 0, 1) !important;
}
li:hover a{
    color : rgba(255, 75, 0, 1) !important;
}
li a {
    font-weight: 700;
}
</style>