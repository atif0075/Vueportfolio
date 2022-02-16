<template>
  <section
    class="w-full h-auto flex flex-col justify-center items-center py-12 text-white container mx-auto relative"
  >
    <main>
      <div
        class="absolute h-60 w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-2/4 top-3.5 animate-blob"
      ></div>
      <div
        class="absolute animate-blob h-60 w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-1/3 top-3.5"
      ></div>
      <div
        class="absolute h-60 animate-blob w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-forty top-1/4"
      ></div>
    </main>

    <main class="z-10">
      <img
        class="w-28 rounded-full p-1 border-8 border-mud"
        src="../assets/myPic.jpg"
        alt="myPic"
      />
    </main>
    <main class="z-10">
      <p class="text-center font-DMSan font-semibold text-lg py-5">
        Hi, I am Atif 👋
      </p>
      <p
        class="text-4xl tracking-wide leading-relaxed font-bold font-DM text-center"
      >
        Build and Design Modern <br />
        Websites with <span class="text-green">Vue/Nuxt</span> and <br />
        use <span class="text-yellow-400">Firebase</span> for backend
      </p>
    </main>
    <Buttons />
  </section>
</template>

<script>
import Buttons from "./Buttons.vue";
export default {
  name: "Hero",
  data: () => {
    return {};
  },
  components: { Buttons },
};
</script>
<style></style>
