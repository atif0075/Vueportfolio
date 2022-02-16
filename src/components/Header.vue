<template>
  <section
    class="w-full h-16 text-white flex justify-between container mx-auto"
  >
    <main
      class="
        text-3xl
        w-1/6
        font-DM
        text-center
        flex
        justify-between
        items-center
        px-3
      "
    >
      AtifM.
    </main>
    <main
      class="
        w-2/6
        flex
        justify-between
        items-center
        px-4
        font-DMSan font-normal text-base
      "
    >
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </main>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>