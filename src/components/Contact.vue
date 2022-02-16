<template>
  <section
    class="
      container
      mx-auto
      flex flex-col
      text-white
      items-center
      px-44
      font-DMSan
      h-screen
    "
  >
    <h1 class="text-4xl font-DM">Contact me</h1>
    <main class="py-12">
      <div>
        <label class="block py-2">Name</label>
        <input
          class="p-2 bg-mud outline-none border border-light-green border-dashed w-96"
          placeholder="Enter your name"
          type="text"
        />
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