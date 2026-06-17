<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
   src="https://aics-sdcf.onrender.com/js/chat-widget.js?v=1781715266965"
      data-business-id="0cb9f74afaa31ddf836d22666eb892d9",
      body: true,
    },
  ],
})
</script>
