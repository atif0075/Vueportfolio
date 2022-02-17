<template>
  <section
    class="w-full h-16 text-white bg-mud lg:bg-transparent flex justify-between items-center lg:static relative"
  >
    <main
      class="sm:text-3xl text-2xl md:w-1/6 font-DM text-center flex justify-center items-center px-3"
    >
      Atif<span class="span">M.</span>
    </main>
    <main class="relative lg:hidden">
      <div
        class="w-72 right-0 -top-3 h-72 absolute z-20 rounded-bl-full bg-green"
      ></div>
      <div class="dark p-2 mx-3 rounded relative z-50 ">
        <svg
          class="w-8 text-green cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
    </main>
    <main
      class="lg:w-2/6 lg:mr-14 flex flex-col absolute lg:static z-50 lg:flex justify-between lg:flex-row lg:items-center lg:px-4 font-DMSan font-normal text-base"
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

<style>
.dark {
  background: #001e264d;
}
</style>
