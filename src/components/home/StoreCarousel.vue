<template>
    <section class="pricing_part section_padding home_page_pricing">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_tittle text-center">
                        <h2 style="text-decoration: underline; text-decoration-color:#FF4800">THEGOTOVET Store</h2>
                        <p>Visit our store to get prenium products just suited for your farms and livestocks</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <img src="https://source.unsplash.com/user/berkaygumustekin/300x300/?dog" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/berkaygumustekin/300x300/?feed" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/berkaygumustekin/300x300/?puppy" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/berkaygumustekin/300x300/?place" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/berkaygumustekin/300x300/?place" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/anniespratt/300x300/?horse" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/patryksobczak/300x300/?goat" class="img-fluid" alt="...">
                    </div>
                    <div class="item">
                        <img src="https://source.unsplash.com/user/rachel_lees/300x300/?place" class="img-fluid" alt="...">
                    </div>
                </div>
            </div>
        </div>
        <img src="../../assets/img/animate_icon/Ellipse_2.png" alt="" class="feature_icon_2 custom-animation2">
    </section>
</template>

<style scoped>

</style>

<script>
export default {
    mounted: () => {
        $('.owl-carousel').owlCarousel({
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
                    items:5
                }
            }
        })
    }
}
</script>