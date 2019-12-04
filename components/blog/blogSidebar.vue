<template>
    <nav id="sidebar">
        <div id="dismiss">
            <i class="ti-close"></i>
        </div>

        <div class="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

    #sidebar {
        width: 250px;
        position: fixed;
        top: 0;
        left: -250px;
        height: 100vh;
        z-index: 90000;
        background: #fff;
        transition: all 0.3s;
        overflow-y: scroll;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    }

    #sidebar.active {
        left: 0;
    }

    #dismiss {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        position: absolute;
        top: 18px;
        right: 1px;
        cursor: pointer;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }

    #dismiss:hover{
        color: #fff;
        background: #FF4800;
        border-radius: 5px;
    }

    #sidebar .sidebar-header {
        padding: 20px;
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
        font-size: 1.1em;
        display: block;
        margin: 5px 10px;
        border-radius: 9px;
    }

    #sidebar ul li a:hover {
        color: #fff;
        background: #FF4800;
    }

    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: #fff;
        background: #FF4800;
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

    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #6d7fcc;
    }

</style>