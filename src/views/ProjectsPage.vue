<template>
  <section
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
</template>

<script>
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
export default {
  name: "Comp",
  data() {
    return {
      project: [
        {
          src: "https://media.istockphoto.com/photos/empty-racing-track-road-and-modern-city-buildings-in-shenzhen-picture-id1256952995?b=1&k=20&m=1256952995&s=170667a&w=0&h=jqpmxkEaAT2Uoi-2V9YOhOFtUiyWqPn0NyZzH4r-G28=",
          name: "Xono -- Web App",
          text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias quidem hic cumque!",
          liveLink: "www.google.com",
          sourceLink: "www.google.com",
        },
        {
          src: "https://media.istockphoto.com/photos/empty-racing-track-road-and-modern-city-buildings-in-shenzhen-picture-id1256952995?b=1&k=20&m=1256952995&s=170667a&w=0&h=jqpmxkEaAT2Uoi-2V9YOhOFtUiyWqPn0NyZzH4r-G28=",
          name: "Yaio -- Web App",
          text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias quidem hic cumque!",
          liveLink: "https://www.google.com/",
          sourceLink: "https://www.google.com/",
        },
        {
          src: "https://media.istockphoto.com/photos/empty-racing-track-road-and-modern-city-buildings-in-shenzhen-picture-id1256952995?b=1&k=20&m=1256952995&s=170667a&w=0&h=jqpmxkEaAT2Uoi-2V9YOhOFtUiyWqPn0NyZzH4r-G28=",
          name: "Xono -- Web App",
          text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias quidem hic cumque!",
          liveLink: "www.google.com",
          sourceLink: "www.google.com",
        },
      ],
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
      } catch (e) {
        console.log("error");
      }
    },
  },
};
</script>

<style></style>
