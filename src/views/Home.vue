<template>
  <div class="home">
    <HomeHeader />
    <HomeBody />
    <HomeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Homeheader.vue";
import HomeBody from "@/components/home/HomeBody.vue";
import HomeFooter from "@/components/home/HomeFooter.vue";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeBody,
    HomeFooter
  }
};
</script>

<style>
.padding_top{
  padding-top: 100px
}
</style>
