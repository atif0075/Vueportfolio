<template>
  <section
    class="w-full h-16 text-white bg-mud lg:bg-transparent flex justify-between lg:static relative"
  >
    <main
      class="sm:text-3xl text-2xl md:w-1/6 font-DM text-center flex justify-center items-center px-3"
    >
      Atif<span class="span">M.</span>
    </main>
    <main
      class="w-2/6 lg:mr-14 bg-green flex justify-between flex-col lg:flex-row z-50 items-center px-4 font-DMSan font-normal text-base"
    >
      <Nav />
    </main>
  </section>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style></style>
