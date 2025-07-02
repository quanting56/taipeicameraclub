<template>
  <div class="termspage">
    <section class="first-termspage"></section>
    <section class="second-termspage">
      <TCCTerms></TCCTerms>
    </section>
  </div>
</template>

<script setup>
import TCCTerms from "../components/TCCTerms.vue";
</script>

<style scoped>
.first-termspage {
  height: 70vh;
  background-image: url("/src/assets/TccTermsBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
}

.second-termspage {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
