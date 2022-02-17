<template>
  <main>
    <div
      class="absolute h-60 w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-0 top-1/4 md:left-2/4 md:top-3.5 animate-blob"
    ></div>
    <div
      class="absolute animate-blob h-60 w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-0 md:left-1/3 md:top-3.5"
    ></div>
    <div
      class="absolute h-60 animate-blob w-60 mix-blend-multiply filter blur-2xl bg-mud opacity-50 rounded-full left-0 top-2/4 md:left-1/3 md:top-1/4"
    ></div>
  </main>
</template>

<script>
export default {
  name: "BlurryBackground",
};
</script>

<style>
.left-forty {
  left: 40%;
}
</style>
