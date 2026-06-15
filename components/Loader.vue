<template>
  <div ref="loaderRef" class="fixed inset-0 bg-background z-[9999] flex items-center justify-center">
    <div class="flex flex-col items-center gap-4">
      <div class="w-24 h-24 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
      <h2 class="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
        NeutourX
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const loaderRef = ref(null)

onMounted(() => {
  gsap.to(loaderRef.value, {
    opacity: 0,
    delay: 1.5,
    duration: 1,
    onComplete: () => {
      loaderRef.value.style.display = 'none'
    }
  })
})
</script>
