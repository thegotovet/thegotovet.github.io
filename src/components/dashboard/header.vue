<template>
    <header class="d-flex justify-content-between container-fluid shadow-sm p-2 bg-light">
        <div class="d-flex align-items-center">
            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div id="search" class="d-flex align-items-center ml-3">
                <span class="ti-search" v-if="!isSearch" @click.prevent="isSearch = !isSearch"></span>
                <div v-else class="d-flex align-items-center">
                    <span class="ti-close mr-3" @click.prevent="isSearch = !isSearch"></span>
                    <div class="search-box">
                        <input type="text" placeholder="Search">
                        <span class="bar"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center right">
            <div class="dropleft notification">
                <span>3</span>
                <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="30, 0">
                    <i class="ti-bell"></i>
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropleft notification mx-4">
                <span>3</span>
                <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="30, 0">
                    <i class="ti-email"></i>
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropleft">
                <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="30, 0">
                    <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="userPhoto" srcset="" width="35" class="img-fluid rounded-circle shadow">
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <h6 class="ml-2">John Doe</h6>
        </div>
    </header>
</template>

<script>
export default {
    mounted() {
        $(document).ready(function() {

            $('.search-box input').blur(function() {
                // check if the input has any value (if we've typed into it)
                if ($(this).val())
                    $(this).addClass('used');
                else
                    $(this).removeClass('used');
            });

        });
    },
    data() {
        return {
            isSearch: false
        }
    },
    methods: {
        toogleSearch: () => {
            this.isSearch = !this.isSearch;
        }
    },
}
</script>

<style>
#sidebarCollapse {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
}

#sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 2px auto;
    display: block;
    background: #555;
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

.search-box{
    position: relative;
}
.search-box input{
    font-size:18px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;
    background-color: transparent;
}
.search-box input:focus { outline:none; }
.search-box label{
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:20px;
    transition:0.2s ease all; 
}
/* active state */
input:focus ~ label {
    top: 0;
    font-size:14px;
    color:#5264AE;
}
/* BOTTOM BARS ================================= */
.bar  { position:relative; display:block; width:300px; }
.bar:before, .bar:after   {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:#5264AE; 
    transition:0.2s ease all; 
}
.bar:before {
    left:50%;
}
.bar:after {
    right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
    width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
    position:absolute;
    height:10%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
    animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@keyframes inputHighlighter {
    from  { background:#5264AE; }
    to    { width:0; background:transparent; }
}

.notification {
    position: relative;
}
.notification span{
    position: absolute;
    padding: 1px 5px;
    border-radius: 50%;
    background-color: #FF4800;
    color: #fff;
    font-size: 12px;
    top: -8px;
    left: -10px;
}
.ti-bell{
    font-size: 20px;
}
i:hover{
    color: #FF4800;
}
</style>