<template>
  <div class="bg-dark h-auto">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap");
*::selection {
  background: #00dc82;
  color: #001e26;
}
*::-webkit-scrollbar {
  width: 6px;
}
*::-webkit-scrollbar-track {
  background: #003543;
}
*::-webkit-scrollbar-thumb {
  background: #00dc82;
}
</style>