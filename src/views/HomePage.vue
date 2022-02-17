<template>
  <section class="h-auto ">
    <Hero />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "Home",
  components: { Header, Hero },
};
</script>
