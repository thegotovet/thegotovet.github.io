<template>
    <!--::header part start::-->
    <header class="main_menu single_page_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link to="/" class="navbar-brand" tag='a'>
                            <span class="p-1 mr-1">Thegotovet:</span> <small class="muted text-light">Animal lover's corner</small>
                        </nuxt-link>
                        <!-- <a class="navbar-brand" href="#">
                            <span class="p-1 mr-1">Thegotovet:</span> <small class="muted text-light">Animal lover's corner</small>
                        </a> -->
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item mr-5" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <nuxt-link to="/" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Home</a> </nuxt-link>
                                <nuxt-link to="#features" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Features</a> </nuxt-link>
                                <nuxt-link to="#services" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Services</a> </nuxt-link>
                                <nuxt-link to="#store" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Store</a> </nuxt-link>
                                <nuxt-link to="/blog" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Blog</a> </nuxt-link>
                                <nuxt-link to="/signon" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">sign in / sign up</a> </nuxt-link>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!--::Header part end::-->
</template>

<script>
export default {
}
</script>