<template>
  <section
    class="
      container
      mx-auto
      flex flex-col
      justify-center
      text-white
      items-center
      px-44
      font-DMSan
    "
  >
    <h1 class="text-4xl font-DM">About me</h1>
    <p class="text-justify py-4">
      Hi there 👋. I am <span class="text-green font-semibold">Atif</span> 😍, a
      self-taught web developer from Faisalabad, Pakistan. I help designers,
      small agencies and businesses bring their ideas to life. Powered by
      <span class="text-green font-semibold">Figma</span>,
      <span class="text-green font-semibold">VS Code</span>
      and <span class="text-green font-semibold">Coffee</span> ☕. I can turn
      your requirements into interactable visuals on
      <span class="text-green font-semibold">time</span> ⏰ and on
      <span class="text-green font-semibold">budget</span> 💰.I design beautiful
      and powerful websites for modern businesses. Any business today needs a
      website 🌐 that wins customers’ trust and helps you do your
      <span class="text-green font-semibold">business</span> well. I make sure
      your website is up to that standard.
    </p>
    <main class="my-3 grid grid-cols-4 gap-2">
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img
          class="w-10 rounded"
          src="../assets/javascript.svg"
          alt="javascript"
        />
        <h1 class="font-bold text-lg py-2">Javascript</h1>
        <p class="text-center font-extralight">
          Core technologie of the World Wide Web, alongside HTML and CSS
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img
          class="w-10 rounded"
          src="../assets/typescript.svg"
          alt="typescript"
        />
        <h1 class="font-bold text-lg py-2">Typescript</h1>
        <p class="text-center font-extralight">
          Superset of JavaScript and adds optional static typing to the language
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img class="w-10 rounded" src="../assets/firebase.svg" alt="firebase" />
        <h1 class="font-bold text-lg py-2">Firebase</h1>
        <p class="text-center font-extralight">
          A platform developed by Google for creating mobile and web
          applications
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img class="w-10 rounded" src="../assets/vuejs.svg" alt="vuejs" />
        <h1 class="font-bold text-lg py-2">Vue Js</h1>
        <p class="text-center font-extralight">
          JavaScript framework for building single-page applications
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img class="w-10 rounded" src="../assets/nuxt.svg" alt="nuxtjs" />
        <h1 class="font-bold text-lg py-2">Nuxt Js</h1>
        <p class="text-center font-extralight">
          JavaScript library based on Vue.js, Node.js, Webpack and Babel.js
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img
          class="w-10 rounded"
          src="../assets/electronjs.svg"
          alt="wlectronjs"
        />
        <h1 class="font-bold text-lg py-2">Electron Js</h1>
        <p class="text-center font-extralight">
          Open-source JavaScript framework developed and maintained by GitHub
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img class="w-10 rounded" src="../assets/sass.svg" alt="sass/scss" />
        <h1 class="font-bold text-lg py-2">Sass/Scss</h1>
        <p class="text-center font-extralight">
          SASS/SCSS extends CSS by providing several mechanisms
        </p>
      </div>
      <div
        class="bg-mud p-3 rounded-lg flex justify-center items-center flex-col"
      >
        <img
          class="w-10 rounded"
          src="../assets/tailwindcss.svg"
          alt="tailwindcss"
        />
        <h1 class="font-bold text-lg py-2">Tailwindcss</h1>
        <p class="text-center font-extralight">
          A utility-first CSS framework packed with classes
        </p>
      </div>
    </main>
    <main class="py-5">
      <p class="text-2xl font-bold text-center">
        Interested in Working with me?
      </p>
      <p class="text-center text-sm pt-2">
        I am always <span class="text-green font-semibold">happy</span> to dirty
        my hands on a <span class="text-green font-semibold">complex</span>
        <br />
        task, so do not
        <span class="text-green font-semibold">hesitate</span> to hit me up with
        your requests!
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
};
</script>

<style>
</style>