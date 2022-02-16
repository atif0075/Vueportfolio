<template>
  <section
    class="container mx-auto flex flex-col justify-center text-white items-center px-44 font-DMSan"
  >
    <h1 class="text-4xl font-DM">About me</h1>
    <p class="text-justify py-4">
      Hi there 👋. I am <span class="span">Atif</span> 😍, a self-taught web
      developer from Faisalabad, Pakistan. I help designers, small agencies and
      businesses bring their ideas to life. Powered by
      <span class="span">Figma</span>,
      <span class="span">VS Code</span>
      and <span class="span">Coffee</span> ☕. I can turn your requirements into
      interactable visuals on <span class="span">time</span> ⏰ and on
      <span class="span">budget</span> 💰.I design beautiful and powerful
      websites for modern businesses. Any business today needs a website 🌐 that
      wins customers’ trust and helps you do your
      <span class="span">business</span> well. I make sure your website is up to
      that standard. I am <span class="span">well</span> familiar with following
      <span class="span">skills</span>.
    </p>
    <main class="my-3 grid grid-cols-4 gap-2">
      <div
        v-for="item in skills"
        :key="item.id"
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img class="w-10 rounded" :src="item.src" :alt="item.name" />
        <h1 class="font-bold text-lg py-2">{{ item.name }}</h1>
        <p class="text-center font-extralight">
          {{ item.text }}
        </p>
      </div>
    </main>
    <main class="py-5">
      <p class="text-2xl font-bold text-center">
        Interested in Working with me?
      </p>
      <p class="text-center text-sm pt-2">
        I am always <span class="span">happy</span> to dirty my hands on a
        <span class="span">complex</span>
        <br />
        task, so do not
        <span class="span">hesitate</span> to hit me up with your requests!
      </p>
      <Buttons />
    </main>
  </section>
</template>

<script>
import Buttons from "./Buttons.vue";
export default {
  name: "About",
  components: { Buttons },
  data() {
    return {
      skills: [
        {
          name: "Javascript",
          src: "../assets/javascript.svg",
          text: "Core technologie of the World Wide Web, alongside HTML and CSS",
        },
        {
          name: "Typescript",
          src: "../assets/typescript.svg",
          text: "Superset of JavaScript and adds optional static typing to the language",
        },
        {
          name: "Firebase",
          src: "../assets/firebase.svg",
          text: " A platform developed by Google for creating mobile and web applications",
        },
        {
          name: "Vue Js",
          src: "../assets/vuejs.svg",
          text: "JavaScript framework for building single-page applications",
        },
        {
          name: "Nuxt Js",
          src: "../assets/nuxt.svg",
          text: " JavaScript library based on Vue.js, Node.js, Webpack and Babel.js",
        },
        {
          name: "Electron Js",
          src: "../assets/electronjs.svg",
          text: "Open-source JavaScript framework developed and maintained by GitHub",
        },
        {
          name: "Sass/Scss",
          src: "../assets/sass.svg",
          text: "SASS/SCSS extends CSS by providing several mechanisms",
        },
        {
          name: "Tailwindcss",
          src: "../assets/tailwindcss.svg",
          text: "A utility-first CSS framework packed with classes",
        },
      ],
    };
  },
};
</script>

<style></style>
