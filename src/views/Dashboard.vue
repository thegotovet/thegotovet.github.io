<template>
    <div class="wrapper">
        <!-- Sidebar -->
        <appSidenav />

        <div id="content" class="w-100 container-fluid">
            <!-- Header -->
            <appHeader />
            <router-view />
        </div>
    </div>
</template>

<script>
    import appHeader from "@/components/dashboard/header.vue";
    import appSidenav from "@/components/dashboard/sidenav.vue";
    export default {
        components: {
            appHeader,
            appSidenav
        },
        mounted() {
            $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
                    theme: "minimal"
                });

                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').toggleClass('active');
                    $(this).toggleClass('active');
                    // close dropdowns
                    $('.collapse.in').toggleClass('in');
                    // and also adjust aria-expanded attributes we use for the open/closed arrows
                    // in our CSS
                    $('a[aria-expanded=true]').addClass('collapsed');
                    $('a[aria-expanded=true]').next('ul').removeClass('show');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            });
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


body {
    font-family: 'Roboto', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}
#content{
    margin-left: 230px;
    transition: all 0.3s;
}
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
    }
    a[data-toggle="collapse"] {
        position: relative;
    }

    .dropdown-toggle::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
    #sidebar.active ~ #content{
        margin-left: 80px;
        transition: all 0.8s;
    }
    #sidebar ~ #content{
        margin-left: 230px;
        transition: all 0.3s;
    }
    #content{
        background: rgba(128,128,128, .1);
        min-height: 100vh;
    }
</style>