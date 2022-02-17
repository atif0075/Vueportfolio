<template>
  <section
    class="container mx-auto flex flex-col justify-center text-white items-center h-auto min-h-screen px-3 lg:px-44 pt-6 lg:pt-0 font-DMSan"
  >
    <h1 class="heading">About me</h1>
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
    <main
      v-if="isMounted"
      class="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
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
    <main v-else>
      <Loading />
    </main>
    <main v-if="showError">
      <p class="text-sm text-red-600 bg-mud p-3 rounded">
        {{ error }}
      </p>
    </main>
    <main class="py-5 flex flex-col items-center">
      <p class="sm:text-2xl text-xl font-bold text-center">
        Interested in Working with me?
      </p>
      <p class="text-center text-sm pt-2 sm:w-72">
        I am always <span class="span">happy</span> to dirty my hands on a
        <span class="span">complex</span>
        task, so do not
        <span class="span">hesitate</span> to hit me up with your requests!
      </p>
      <Buttons />
    </main>
  </section>
</template>

<script>
import Buttons from "./Buttons.vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Loading from "./Loading.vue";
import { querystring } from "@firebase/util";
export default {
  name: "About",
  components: { Buttons, Loading },
  data() {
    return {
      isMounted: false,
      skills: [],
      error: "Something bad with your internet connection",
      showError: false,
    };
  },
  beforeMount() {
    this.fetchData();
    this.showError = false;
  },
  methods: {
    async fetchData() {
      const Data = collection(db, "Skills");
      try {
        const querySnapshot = await getDocs(Data);
        querySnapshot.forEach((doc) => {
          let obj = {};
          obj["name"] = doc.data().sName;
          obj["src"] = doc.data().sLink;
          obj["text"] = doc.data().sText;
          this.skills.push(obj);
        });
        if (querystring) {
          this.isMounted = true;
        }
      } catch (e) {
        this.showError = true;
      }
    },
  },
};
</script>

<style></style>
