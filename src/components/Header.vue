<template>
  <section
    class="w-full h-16 text-white flex justify-between container mx-auto"
  >
    <main
      class="text-3xl w-1/6 font-DM text-center flex justify-between items-center px-3"
    >
      AtifM.
    </main>
    <main
      class="w-2/6 flex justify-between items-center px-4 font-DMSan font-normal text-base"
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
