<template>
  <div class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <svg viewBox="0 0 1200 400" class="w-full h-auto">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00C2FF" />
            <stop offset="100%" stop-color="#FFD166" />
          </linearGradient>
        </defs>
        <path
          ref="pathRef"
          d="M100,200 Q300,100 500,200 T900,200 T1200,200"
          fill="none"
          stroke="url(#pathGradient)"
          stroke-width="3"
          stroke-dasharray="10,10"
        />
        <circle ref="planeRef" r="8" fill="#00C2FF">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#pathRef" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>
