<template>
  <section
    class="container mx-auto flex flex-col text-white items-center px-44 min-h-screen h-auto font-DMSan"
  >
    <h1 class="text-4xl font-DM">Projects</h1>
    <main class="grid grid-cols-3 gap-4 py-10">
      <div class="w-full" v-for="item in project" :key="item.id">
        <div class="bg-mud p-3 rounded-lg overflow-hidden">
          <img
            class="w-96 bg-center rounded-lg"
            :src="item.src"
            :alt="item.name"
          />
          <h1 class="py-2 font-bold text-2xl">Xono Web App</h1>
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
};
</script>

<style></style>
