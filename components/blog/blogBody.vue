<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h5 class="w-100 mb-4">
                    <span><span class="ti-arrow-top-right"></span>Trending</span>
                </h5>
                <div class="d-flex flex-column">
                    <div class="text-center">
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="blogPhoto" class="img-fluid rounded-circle shadow-sm text-center">
                        <h5 class="img-desc text-muted mt-3 text-sm">
                            The Need-to-know fine Details about thegotovet
                        </h5>
                        <hr>
                    </div>
                    <div class="text-center">
                        <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="blogPhoto" class="img-fluid rounded-circle shadow-sm text-center">
                        <h5 class="img-desc text-muted mt-3 text-sm">
                            The Need-to-know fine Details about thegotovet
                        </h5>
                        <hr>
                    </div>
                    <div class="text-center">
                        <img src="https://randomuser.me/api/portraits/women/13.jpg" alt="blogPhoto" class="img-fluid rounded-circle shadow-sm text-center">
                        <h5 class="img-desc text-muted mt-3 text-sm">
                            The Need-to-know fine Details about thegotovet
                        </h5>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center">
                    <blog-carousel />

                    <div class="mt-5">
                        <div class="title2">
                            <h5>Dr. Chinonyerem starts a project to tackle tuberclosis</h5>
                            <span></span>
                        </div>
                        <img src="https://www.bellanaija.com/wp-content/uploads/2019/06/CSI_5677.jpg" alt="chinonyerem" srcset="" class="img-fluid shadow-sm mt-2">
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <h5 class="w-100 mb-4">
                    <span> <span class="ti-timer"></span> Latest</span>
                </h5>
                <div class="d-flex flex-column">
                    <hr />
                    <span class="text-muted">Piggery and health: Feeds to give and not to give</span>
                    <hr>
                    <span class="text-muted">Chicken and health: Feeds to give and feed for starters</span>
                    <hr>
                    <span class="text-muted">Canine and health: Foods to give and Food for puppy</span>
                    <hr>
                    <span class="text-muted">Cat and health: Foods to give and Food for kitten with litter box</span>
                    <hr>
                    <span class="text-muted">Livestock and health: Lorem, ipsum dolor sit amet consectetur adipisicing.</span>
                    <hr>
                    <span class="text-muted">Horse and health: Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!</span>
                    <br />
                    <a href="#" class="text-right mt-2">
                        More latest stories
                        <span class="ti-arrow-right"></span>
                    </a>
                </div>
            </div>
        </div>

    </div>

    <div id="highlights" class="row">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-3 text-center">
                    <h5>For your <span>pets</span> </h5>
                    <div class="card shadow-sm">
                        <img src="/assets/img/blog/first.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 text-center">
                    <h5>For your <span>Health</span> </h5>
                    <div class="card shadow-sm">
                        <img src="/assets/img/blog/second.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 text-center">
                    <h5>For your <span>Dairy</span> </h5>
                    <div class="card shadow-sm">
                        <img src="/assets/img/blog/third.jpg" class="card-img-top" alt="..."> 
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 text-center">
                    <h5>For your <span>Livestock</span> </h5>
                    <div class="card shadow-sm">
                        <img src="/assets/img/blog/fourth.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-5" id="newPosts">
        <h5 class="w-100 mb-4">
            <span>New Posts</span>
        </h5>

        <div class="row mt-5">
            <div class="col-12 col-md-8"  id="newPostslist">
                <div class="row">
                    <div class="col-12 d-flex align-items-center mb-4">
                        <div class="image mr-4">
                            <img src="https://randomuser.me/api/portraits/women/13.jpg" width="400" alt="blogPhoto" class="img-fluid shadow-sm text-center">
                        </div>
                        <div class="text">
                            <span class="text-muted">Animal</span>
                            <h6>New Animal feed: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                            <h6 class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo deleniti ullam sit neque dolorem, ex exercitationem?</h6>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center mb-4">
                        <div class="image mr-4">
                            <img src="https://randomuser.me/api/portraits/women/13.jpg" width="400" alt="blogPhoto" class="img-fluid shadow-sm text-center">
                        </div>
                        <div class="text">
                            <span class="text-muted">Animal</span>
                            <h6>New Animal feed: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                            <h6 class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo deleniti ullam sit neque dolorem, ex exercitationem?</h6>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center mb-4">
                        <div class="image mr-4">
                            <img src="https://randomuser.me/api/portraits/women/13.jpg" width="400" alt="blogPhoto" class="img-fluid shadow-sm text-center">
                        </div>
                        <div class="text">
                            <span class="text-muted">Animal</span>
                            <h6>New Animal feed: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                            <h6 class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo deleniti ullam sit neque dolorem, ex exercitationem?</h6>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center mb-4">
                        <div class="image mr-4">
                            <img src="https://randomuser.me/api/portraits/women/13.jpg" width="400" alt="blogPhoto" class="img-fluid shadow-sm text-center">
                        </div>
                        <div class="text">
                            <span class="text-muted">Animal</span>
                            <h6>New Animal feed: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                            <h6 class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo deleniti ullam sit neque dolorem, ex exercitationem?</h6>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center mb-4">
                        <div class="image mr-4">
                            <img src="https://randomuser.me/api/portraits/women/13.jpg" width="400" alt="blogPhoto" class="img-fluid shadow-sm text-center">
                        </div>
                        <div class="text">
                            <span class="text-muted">Animal</span>
                            <h6>New Animal feed: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                            <h6 class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo deleniti ullam sit neque dolorem, ex exercitationem?</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 text-center">
                <blogComments />

                <div class="mt-5" id="latestPosts">
                    <div class="py-3">
                        <h5 class="w-100">
                            <span>Recent posts</span>
                        </h5>
                    </div>

                    <div id="posts">
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a><hr>
                        <a href="#">New Feed: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="explore" class="text-center">
        <h6 class="w-100 py-4">Explore <span>"thegotovet"</span></h6>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="card bg-transparent text-right border-0 shadow-sm">
                        <img src="https://placehold.it/200x150" class="card-img-top" alt="...">
                        <a href="#">Our Services <span class="ti-shopping-cart"></span></a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-right border-0 shadow-sm">
                        <img src="https://placehold.it/200x150" class="card-img-top" alt="...">
                        <a href="#">Our Features <span class="ti-pie-chart"></span></a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-right border-0 shadow-sm">
                        <img src="https://placehold.it/200x150" class="card-img-top" alt="...">
                        <a href="#">Our Goals <span class="ti-medall"></span></a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card bg-transparent text-right border-0 shadow-sm">
                        <img src="https://placehold.it/200x150" class="card-img-top" alt="...">
                        <a href="#">Our Mission <span class="ti-car"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import blogCarousel from "./blogCarousel.vue";
import blogComments from "./blogComments.vue";

export default {
    components: {
        blogCarousel,
        blogComments
    },
    head() {
        return {
            link: [
                { rel: 'stylesheet', href: '/assets/css/blog.css'  }
            ]
        }
    }
}
</script>

<style>
</style>