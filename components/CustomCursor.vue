<template>
  <div class="fixed inset-0 pointer-events-none z-[9998]">
    <div ref="cursorRef" class="absolute w-6 h-6 bg-secondary/40 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorRef = ref(null)

const handleMouseMove = (e) => {
  gsap.to(cursorRef.value, {
    duration: 0.1,
    left: e.clientX,
    top: e.clientY
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
