<template>
  <section
    v-if="isMounted"
    class="container mx-auto flex flex-col text-white items-center px-3 lg:px-44 pt-6 lg:pt-0 min-h-screen h-auto font-DMSan"
  >
    <h1 class="heading">Projects</h1>
    <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
      <div class="w-full" v-for="item in project" :key="item.id">
        <div class="bg-mud p-3 rounded-lg overflow-hidden">
          <img
            class="w-full bg-center rounded-lg"
            :src="item.src"
            :alt="item.name"
          />
          <h1 class="py-2 font-bold text-2xl sm:text-3xl">
            {{ item.name }}
          </h1>
          <p>
            {{ item.text }}
          </p>
          <div class="pt-3 font-semibold">
            <a :href="item.liveLink" target="_blank" rel="noopener noreferrer">
              <button class="px-3 py-1 rounded bg-green text-mud font-bold">
                Live
              </button>
            </a>
            <a
              :href="item.sourceLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="px-3 py-1 rounded ml-6 bg-dark">Source</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  </section>
  <main v-else class="flex justify-center items-center h-96">
    <Loading />
  </main>
</template>

<script>
import { db } from "../firebase/config";
import Loading from "../components/Loading.vue";
import { collection, getDocs } from "firebase/firestore";
export default {
  name: "Comp",
  components: { Loading },
  data() {
    return {
      project: [],
      isMounted: false,
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const Data = collection(db, "Projects");
      try {
        const querySnapshot = await getDocs(Data);
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          let obj = {};
          obj["src"] = doc.data().pImage;
          obj["name"] = doc.data().pName;
          obj["text"] = doc.data().pText;
          obj["liveLink"] = doc.data().pLink;
          obj["sourceLink"] = doc.data().pSource;
          this.project.push(obj);
        });
        this.isMounted = true;
      } catch (e) {
        console.log("error");
      }
    },
  },
};
</script>

<style></style>
