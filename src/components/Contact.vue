<template>
  <section class="contactSection">
    <h1 class="heading">Contact me</h1>
    <main class="py-5 lg:py-12">
      <div>
        <label class="label">Name</label>
        <input
          v-model="name"
          class="input"
          placeholder="Enter your name......."
          type="text"
        />
      </div>

      <div>
        <label class="label">Email</label>
        <input
          v-model="email"
          class="input"
          placeholder="Enter your email......."
          type="email"
        />
      </div>
      <div>
        <label class="label">Message</label>

        <textarea
          v-model="message"
          class="p-2 bg-mud outline-none border border-bor-green border-dashed md:w-128 w-full h-56 rounded resize-none"
          placeholder="Enter your message......."
        ></textarea>
      </div>
      <main v-if="showLoad" class="flex justify-center">
        <smallLoading />
      </main>
      <div class="flex justify-end py-3">
        <button @click="handleSubmit" class="btnGreen">
          {{ Submit }}
        </button>
      </div>
      <p>Or <span class="span">Contact</span> using</p>
      <div class="flex justify-evenly items-center py-4">
        <a :href="githubLink" target="_blank" class="icon">
          <img class="w-8" src="../assets/Social/Github.svg" alt="Github" />
        </a>
        <a :href="mailLink" class="icon">
          <img class="w-8" src="../assets/Social/mail.svg" alt="Mail" />
        </a>
        <a :href="phoneLink" class="icon">
          <img class="w-8" src="../assets/Social/phone.svg" alt="Phone" />
        </a>
        <a :href="whatsappLink" target="_blank" class="icon">
          <img class="w-8" src="../assets/Social/whatsapp.svg" alt="Whatsapp" />
        </a>
        <a :href="linkedinLink" target="_blank" class="icon">
          <img class="w-8" src="../assets/Social/linkedin.svg" alt="Linkedin" />
        </a>
      </div>
    </main>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, addDoc, query, orderBy } from "firebase/firestore";
import smallLoading from "./smallLoading.vue";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      Submit: "Submit",
      showLoad: false,
      githubLink: "https://github.com/atif0075",
      mailLink: "mailto:matifm@protonmail.com",
      phoneLink: "tel:+923029798428",
      whatsappLink: "https://wa.link/ygna50",
      linkedinLink: "https://www.linkedin.com",
    };
  },
  methods: {
    async handleSubmit() {
      this.showLoad = true;
      const Data = collection(db, "UserMessages");
      try {
        await addDoc(Data, {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        console.log("hdalslasd");
        this.Submit = "Submitted";
        this.showLoad = false;
        setTimeout(() => {
          this.name = "";
          this.email = "";
          this.message = "";
          this.Submit = "Submit";
        }, 5000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: { smallLoading },
};
</script>

<style></style>
