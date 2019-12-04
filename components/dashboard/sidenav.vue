<template>
    <nav id="sidebar" class="active">
            <div class="sidebar-header d-flex align-items-center justify-content-center">
                <img src="/assets/logo.png" class="img-fluid" width="40px" alt="">
                <h3>thegotovet</h3>
            </div>

            <ul class="list-unstyled components p-2 px-3">
                <!-- <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="list-unstyled collapse" id="homeSubmenu" style="">
                        <li>
                            <span class="ti-search"></span>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li> -->
                <router-link to="/dashboard" class="nav-item mt-3" tag='li' active-class="active" exact>
                    <a class="sidebar-link">
                        <span class="icon-holder">
                            <i class="c-blue-500 ti-home"></i>
                        </span>
                        <span class="title">Dashboard</span>
                    </a> 
                </router-link>
                <router-link to="/blog" class="nav-item" tag='li' active-class="active" exact>
                    <a class="sidebar-link">
                        <span class="icon-holder mr-3">
                            <i class="c-blue-500 ti-book"></i>
                        </span>
                        <span class="title">Blog</span>
                    </a>
                </router-link>
            </ul>

            <!-- <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </!-->
        </nav>
</template>

<script>
    $(document).ready(function () {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    })

    export default {

    }
</script>

<style>
    #sidebar {
        width: 230px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 999;
        background: rgb(239, 241, 247);
        color: #343A40;
        transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    }
    /* Shrinking the sidebar from 250px to 80px and center aligining its content*/
    #sidebar.active {
        min-width: 80px;
        max-width: 80px;
        text-align: center;
        transition: all 0.4s;
    }
    #sidebar .sidebar-header {
        height: 56px;
    background: #fff;
}
#sidebar .sidebar-header h3:hover{
    color: #FF4800;
    cursor: pointer;
}

#sidebar ul.components {
    padding: 20px 0;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: .9em;
    display: block;
}
#sidebar ul li a:hover {
    color: #FF4800;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #FF4800;
}
ul ul a {
    font-size: 0.8em !important;
    padding-left: 30px !important;
}
    /* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/
    #sidebar .sidebar-header strong {
        display: none;
    }
    #sidebar.active .sidebar-header h3 {
        display: none;
    }
    #sidebar.active .sidebar-header strong {
        display: block;
    }

    #sidebar ul li a {
        text-align: left;
    }

    #sidebar ul span.title{
        margin-left: 1rem !important;
    }

    #sidebar.active ul li a {
        padding: 20px 10px;
        text-align: center;
        font-size: 0.85em;
    }

    #sidebar.active ul li a i {
        margin-right:  0;
        display: block;
        font-size: 1.2em;
        margin-bottom: 5px;
    }
    
    #sidebar.active .title{
        display: none
    }

    /* Changing the arrow position to bottom center position, 
        translateX(50%) works with right: 50% 
    to accurately  center the arrow */
    #sidebar.active .dropdown-toggle::after {
        top: auto;
        bottom: 10px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
    }
    @media (max-width: 768px) {
        /* 80px and its content aligned to centre. Pushing it off the screen with the
        negative left margin
        */
        #sidebar.active {
            min-width: 80px;
            max-width: 80px;
            text-align: center;
            margin-left: -80px !important;
        }


        /* Reappearing the sidebar on toggle button click */
        #sidebar {
            margin-left: 0; 
        }


        /* Toggling the sidebar header content, 
        hide the big heading [h3] and showing the small heading [strong] and vice versa
        */
        #sidebar .sidebar-header strong {
            display: none;
        }
        #sidebar.active .sidebar-header h3 {
            display: none;
        }
        #sidebar.active .sidebar-header strong {
            display: block;
        }

        /* Downsize the navigation links font size */
        #sidebar.active ul li a {
            padding: 20px 10px;
            font-size: 0.85em;
        }

        #sidebar.active ul li a i {
            margin-right:  0;
            display: block;
            font-size: 1.8em;
            margin-bottom: 5px;
        }

        /* Adjust the dropdown links padding*/
        #sidebar.active ul ul a {
            padding: 10px !important;
        }

        /* Changing the arrow position to bottom center position, 
        translateX(50%) works with right: 50% 
        to accurately  center the arrow */
        .dropdown-toggle::after {
            top: auto;
            bottom: 10px;
            right: 50%;
            -webkit-transform: translateX(50%);
            -ms-transform: translateX(50%);
            transform: translateX(50%);
        }
    }
</style>