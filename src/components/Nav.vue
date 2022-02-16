<template>
  <router-link
    class="hover:text-green duration-300 border border-dashed py-1 border-bor-green px-3"
    to="/"
    >Home</router-link
  >
  <router-link
    class="hover:text-green duration-300 border border-dashed py-1 border-bor-green px-3"
    to="/about"
    >About</router-link
  >
  <router-link
    class="hover:text-green duration-300 border border-dashed py-1 border-bor-green px-3"
    to="/projects"
    >Projects</router-link
  >
  <router-link
    class="hover:text-green duration-300 border border-dashed py-1 border-bor-green px-3"
    to="/contact"
    >Contact</router-link
  >
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.is-active {
  color: #00dc82;
}

</style>
