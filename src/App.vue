<template>
  <NavBar></NavBar>
  <div class="router-view">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
</style>
