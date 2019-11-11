<template>
    <div>
        <div class="wrapper">
            <blogSidebar />

            <div id="content" class="pt-0">
                <blogHeader />
                <blogBody />
                <homeFooter />
            </div>
        </div>
        <div class="overlay"></div>

    </div>
    
</template>

<script>
import blogHeader from "@/components/blog/blogHeader.vue";
import blogSidebar from "@/components/blog/blogSidebar.vue";
import blogBody from "@/components/blog/blogBody.vue";
import homeFooter from "@/components/home/HomeFooter.vue";

export default {
    mounted() {
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    },
    components: {
        blogHeader,
        blogSidebar,
        blogBody,
        homeFooter
    }
}
</script>

<style scoped>
    @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }

    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }
    #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    padding-bottom: 0;
    top: 0;
    right: 0;
    }
    .overlay {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        z-index: 998;
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
    .overlay.active {
        display: block;
        opacity: 1;
    }
    footer{
        margin: 0 -20px;
    }
</style>