<template>
  <div class="home">
    <HomeHeader />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <HomeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Homeheader.vue";
import HomeFooter from "@/components/home/HomeFooter.vue";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>

<style>
.padding_top{
  padding-top: 100px
}
</style>
