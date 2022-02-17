<template>
  <section
    class="w-full h-auto flex flex-col justify-center items-center py-20 sm:py-12 text-white container mx-auto relative"
  >
    <BlurryBackground />

    <main class="z-10">
      <img
        class="w-24 sm:w-28 rounded-full p-1 border-8 border-mud"
        :src="imageLink"
        alt="myPic"
      />
    </main>
    <main class="z-10 py-8 md:py-0">
      <p class="text-center font-DMSan font-semibold text-lg py-5">
        Hi, I am Atif 👋
      </p>
      <p
        class="sm:text-4xl text-2xl tracking-wide leading-loose sm:leading-relaxed font-bold font-DM text-center"
      >
        Build and Design Modern <br />
        Websites with
        <span class="text-green relative"
          >Vue/Nuxt
          <img
            class="absolute -bottom-1 left-0"
            src="../assets/linegreen.svg"
          />
        </span>
        and
        <br />
        use
        <span class="text-yellow-400 relative"
          >Firebase
          <span>
            <img class="absolute -bottom-1 left-0" src="../assets/line.svg" />
          </span>
        </span>
        for backend
      </p>
    </main>
    <main class="px-1">
      <Buttons />
    </main>
  </section>
</template>

<script>
import Buttons from "./Buttons.vue";
import BlurryBackground from "./BlurryBackground.vue";
export default {
  name: "Hero",
  data: () => {
    return {
      imageLink:"https://i.postimg.cc/43Sz3q68/myPic.jpg"
    };
  },
  components: { Buttons, BlurryBackground },
  
};
</script>
<style></style>
