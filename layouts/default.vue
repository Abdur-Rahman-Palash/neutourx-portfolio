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
      src: 'https://aics-sdcf.onrender.com/js/embed.js',
      'data-business-id': '0c0a917947c82b0a192bce5c5454cbc2',
      body: true,
    },
  ],
})
</script>
