<template>
  <section
    class="
      container
      mx-auto
      flex flex-col
      text-white
      items-center
      px-44
      h-auto
      font-DMSan
    "
  >
    <h1 class="text-4xl font-DM">Contact me</h1>
    <main class="py-12">
      <div>
        <label class="block py-2">Name</label>
        <input class="input" placeholder="Enter your name......." type="text" />
      </div>
      <div>
        <label class="block py-2">Email</label>
        <input
          class="input"
          placeholder="Enter your email......."
          type="email"
        />
      </div>
      <div>
        <label class="block py-2">Message</label>

        <textarea
          class="
            p-2
            bg-mud
            outline-none
            border border-bor-green border-dashed
            w-96
            h-56
            rounded
            resize-none
          "
          placeholder="Enter your message......."
        ></textarea>
      </div>
      <div class="flex justify-end py-3">
        <button
          class="
            px-5
            py-2
            bg-green
            text-dark
            focus:ring-offset-light-green
            duration-300
            ease-in-out
            hover:bg-light-green
            font-DMSan font-bold
            rounded-md
          "
        >
          Contact
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
export default {
  name: "Contact",
};
</script>

<style>
</style>