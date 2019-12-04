<template>
  <div class="home">
    <HomeBody />
  </div>
</template>

<script>
import HomeBody from "~/components/home/HomeBody";

export default {
  components: {
    HomeBody,
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  .padding_top{
    padding-top: 100px;
  }
</style>
