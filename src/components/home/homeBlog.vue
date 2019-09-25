<template>
    <section class="use_sasu padding_top" id="blog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_tittle text-center">
                        <h2 style="text-decoration: underline; text-decoration-color:#FF4800">THEGOTOVET Blog</h2>
                        <p>Visit our blog to get updates on your pet and knowledge on diseases</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="owl-carousel owl-theme owl-blog">
                    <div class="item">
                        <div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>                    
                    </div>
                    <div class="item">
                        <div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item"><div class="card" style="width: 18rem;">
                            <img src="https://placehold.it/200x200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data : () => {
        return {

        }
    },
    mounted: () => {
        Vue.nextTick(() => {
            $('.owl-blog').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })
        })
    }
}
</script>