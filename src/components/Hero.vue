<template>
  <section
    class="
      w-full
      h-auto
      flex flex-col
      justify-center
      items-center
      py-12
      text-white
      container
      mx-auto
    "
  >
    <main>
      <img
        class="w-28 rounded-full p-1 border-8 border-mud"
        src="../assets/myPic.jpg"
        alt="myPic"
      />
    </main>
    <main>
      <p class="text-center font-DMSan font-semibold text-lg py-5">
        Hi, I am Atif 👋
      </p>
      <p
        class="
          text-4xl
          tracking-wide
          leading-relaxed
          font-bold font-DM
          text-center
        "
      >
        Build and Design Modern Websites <br />
        with <span class="text-green">Vue/Nuxt</span> and also <br />
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
<style>
</style>