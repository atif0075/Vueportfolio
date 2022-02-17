<template>
  <section class="headerSection">
    <main
      class="sm:text-3xl text-2xl md:w-1/6 font-DM text-center flex justify-center items-center px-3"
    >
      Atif<span class="span">M.</span>
    </main>
    <main class="relative lg:hidden">
      <div
        id="blob"
        class="w-72 hidden right-0 -top-3 h-72 absolute z-20 rounded-bl-full bg-mud"
      ></div>
      <div class="dark p-2 mx-3 rounded relative z-50">
        <div @click="hamBurger" id="hamburger" class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </main>
    <ul id="navLinks" class="nav-links navbar">
      <li>
        <router-link @click="hide" class="routeBtn" to="/">Home</router-link>
      </li>
      <li>
        <router-link @click="hide" class="routeBtn" to="/about"
          >About</router-link
        >
      </li>
      <li>
        <router-link @click="hide" class="routeBtn" to="/projects"
          >Projects</router-link
        >
      </li>
      <li>
        <router-link @click="hide" class="routeBtn" to="/contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Header",
  methods: {
    hamBurger() {
      const links = document.querySelectorAll(".nav-links li");
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      hamburger.classList.toggle("toggle");
    },
    hide() {
      document.querySelector("#hamburger").click();
    },
  },
};
</script>

<style>
.dark {
  background: #001e264d;
}

.hamburger div {
  width: 30px;
  height: 3px;
  background: #f2f5f7;
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    transition: all 0.3s ease;
  }

  .nav-links li {
    opacity: 0;
    transition: all 0.5s ease 0.1s;
  }
  li.fade {
    opacity: 1;
  }
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
  transition: all 0.7s ease;
  width: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
