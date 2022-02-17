<template>
  <section
    class="container mx-auto md:flex md:flex-col text-white items-center px-3 md:px-44 pt-6 lg:pt-0 h-auto font-DMSan"
  >
    <h1 class="heading">Contact me</h1>
    <main class="py-5 lg:py-12">
      <div>
        <label class="block py-2">Name</label>
        <input
          v-model="name"
          class="input"
          placeholder="Enter your name......."
          type="text"
        />
      </div>

      <div>
        <label class="block py-2">Email</label>
        <input
          v-model="email"
          class="input"
          placeholder="Enter your email......."
          type="email"
        />
      </div>
      <div>
        <label class="block py-2">Message</label>

        <textarea
          v-model="message"
          class="p-2 bg-mud outline-none border border-bor-green border-dashed md:w-128 w-full h-56 rounded resize-none"
          placeholder="Enter your message......."
        ></textarea>
      </div>
      <div class="flex justify-end py-3">
        <button
          @click="handleSubmit"
          class="px-5 py-2 bg-green text-dark focus:ring-offset-light-green duration-300 ease-in-out hover:bg-light-green font-DMSan font-bold rounded-md"
        >
          Submit
        </button>
      </div>
      <p>Or <span class="span">Contact</span> using</p>
      <div class="flex justify-evenly items-center py-4">
        <a
          href="https://github.com/atif0075"
          target="_blank"
          class="hover:bg-mud p-1 rounded duration-300 ease-in-out"
        >
          <img class="w-8" src="../assets/Social/Github.svg" alt="Github" />
        </a>
        <a href="" class="hover:bg-mud p-1 rounded duration-300 ease-in-out">
          <img class="w-8" src="../assets/Social/mail.svg" alt="Mail" />
        </a>
        <a href="" class="hover:bg-mud p-1 rounded duration-300 ease-in-out">
          <img class="w-8" src="../assets/Social/phone.svg" alt="Phone" />
        </a>
        <a href="" class="hover:bg-mud p-1 rounded duration-300 ease-in-out">
          <img class="w-8" src="../assets/Social/whatsapp.svg" alt="Whatsapp" />
        </a>
        <a href="" class="hover:bg-mud p-1 rounded duration-300 ease-in-out">
          <img class="w-8" src="../assets/Social/linkedin.svg" alt="Linkedin" />
        </a>
      </div>
    </main>
  </section>
</template>

<script>
import { db } from "../firebase/config";
import { collection, addDoc, query, orderBy } from "firebase/firestore";
import Loading from "./Loading.vue";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      messdage: "",
    };
  },
  methods: {
    async handleSubmit() {
      const Data = collection(db, "UserMessages");
      try {
        await addDoc(Data, {
          id: "2",
          name: this.name,
          email: this.email,
          message: this.message,
        });
        console.log("hdalslasd");
        setTimeout(() => {
          const q = query(Data,collection("UserMessages"), orderBy("id", "desc"));
          console.log(q);
        }, 2000);

        // console.log(Data.collection("UserMessages").orderBy("id", "asc"));
      } catch (e) {
        console.log("hell");
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
