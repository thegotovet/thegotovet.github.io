<template>
    <!--::header part start::-->
    <header class="main_menu single_page_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="#"> 
                            <!-- <img src="../../assets/img/thegotvetlogo1.png" alt="logo" class="img-fluid" style="max-width:100px"> -->
                            <span class="p-1 mr-1">Thegotovet:</span> <small class="muted text-light">Animal lover's corner</small>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse main-menu-item mr-5" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <router-link to="/" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Home</a> </router-link>
                                <!-- <router-link to="#features" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">features</a> </router-link> -->
                                <li class="nav-item">
                                    <a class="nav-link" href="#features">Features</a>
                                </li>
                                <router-link to="/blog" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">Blog</a> </router-link>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#store">Store</a>
                                </li>
                                <router-link to="/signon" class="nav-item" tag='li' active-class="active" exact><a class="nav-link">sign in / sign up</a> </router-link>
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