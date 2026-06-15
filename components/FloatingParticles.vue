<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <canvas ref="canvasRef" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx
let particles = []
let animationId

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 194, 255, ${this.opacity})`
    ctx.fill()
  }
}

const init = () => {
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  particles = []
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(canvas))
  }

  animate()
}

const animate = () => {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
  particles.forEach(p => {
    p.update()
    p.draw()
  })

  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
})
</script>
