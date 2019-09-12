<template>
  <div class="home">
    <HomeHeader />
    <HomeBody />
    <HomeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/Homeheader.vue";
import HomeBody from "@/components/HomeBody.vue";
import HomeFooter from "@/components/HomeFooter.vue";

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
</style>
