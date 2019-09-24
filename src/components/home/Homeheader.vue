<template>
    <!--::header part start::-->
    <header class="main_menu single_page_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="#"> 
                            <img src="../../assets/img/thegotvetlogo1.png" alt="logo" class="img-fluid" style="max-width:100px">
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
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="#">pricing</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#"> blog</a>
                                        <a class="dropdown-item" href="#">Single blog</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <a class="dropdown-item" href="#">Elements</a>
                                    </div>
                                </li> -->
                            </ul>
                        <!-- <a href="#" class="d-none d-sm-block btn_1 ml-5">sign up / sign in</a> -->
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
    beforeMount() {
        var favicon = document.getElementById('favicon');
    var bootstrapCss = document.createElement("link"); 
    var animateCss = document.createElement("link");
    var allCss = document.createElement("link");
    var owlCss = document.createElement("link");
    var owlThemeCss = document.createElement("link");
    var flaticonCss = document.createElement("link");
    var themifyCss = document.createElement("link");
    var slickCss = document.createElement("link");
    var styleCss = document.createElement("link");

    var app = document.getElementById('app');
    var jqueryJs = document.createElement('script');
    var popperJs = document.createElement('script');
    var bootstrapJs = document.createElement('script');
    var owlJs = document.createElement('script');
    var customJs = document.createElement('script');

    bootstrapCss.rel = animateCss.rel = allCss.rel =  owlCss.rel = owlThemeCss.rel = 
      flaticonCss.rel = themifyCss.rel = slickCss.rel = styleCss.rel = "stylesheet";

    bootstrapCss.href = "assets/css/bootstrap.min.css";
    owlCss.href = "assets/css/owl.carousel.min.css";
    owlThemeCss.href = "assets/css/owl.theme.default.min.css";
    animateCss.href = "assets/css/animate.css";
    allCss.href = "assets/css/all.css";
    flaticonCss.href = "assets/css/flaticon.css";
    themifyCss.href = "assets/css/themify-icons.css";
    slickCss.href = "assets/css/slick.css";
    styleCss.href = "assets/css/style.css";

    jqueryJs.src = "./assets/js/jquery-1.12.1.min.js";
    popperJs.src = "./assets/js/popper.min.js";
    bootstrapJs.src = "./assets/js/bootstrap.min.js";
    owlJs.src = "./assets/js/owl.carousel.min.js";
    customJs.src = "./assets/js/custom.js";

    jqueryJs.id = "jquery";
    popperJs.id = "popper";
    bootstrapJs.id = "bootsjs";
    owlJs.id = "owljs";
    customJs.id = "custom";
    
    favicon.parentNode.insertBefore(styleCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(slickCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(themifyCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(flaticonCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(allCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(animateCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(owlThemeCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(owlCss , favicon.nextSibling)
    favicon.parentNode.insertBefore(bootstrapCss , favicon.nextSibling)
    
    app.parentNode.insertBefore(popperJs, app.nextSibling)
    app = document.getElementById('popper');
    app.parentNode.insertBefore(bootstrapJs, app.nextSibling)
    app = document.getElementById('bootsjs');
    app.parentNode.insertBefore(owlJs, app.nextSibling)
    app = document.getElementById('owljs');
    app.parentNode.insertBefore(customJs, app.nextSibling)
    },
  mounted () {
    
  }
}
</script>