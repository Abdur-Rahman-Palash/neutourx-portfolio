<template>
  <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style="background-image: linear-gradient(135deg, rgba(5, 14, 28, 0.85), rgba(0, 35, 102, 0.75)), url('/hero-bg.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
    <canvas ref="canvasRef" class="absolute inset-0 z-0"></canvas>
    
    <div class="absolute inset-0 bg-gradient-to-br from-background via-primary to-background opacity-40 z-10"></div>
    
    <div class="relative z-20 text-center px-4 max-w-7xl mx-auto">
      <h1 ref="headlineRef" class="font-heading font-bold text-hero-mobile sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-tight text-white drop-shadow-lg">
        <span class="block">Fly Further.</span>
        <span class="block text-white drop-shadow-lg">Travel Smarter.</span>
      </h1>
      <p ref="subheadlineRef" class="font-body text-body-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Discover the world with premium travel solutions, trusted airline partnerships, and unbeatable prices.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <button ref="btn1Ref" class="font-heading glass px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
          Explore Services
        </button>
        <button ref="btn2Ref" class="font-heading bg-secondary/20 border-2 border-secondary px-10 py-5 rounded-full font-bold text-xl hover:bg-secondary/40 hover:border-secondary/60 transition-all duration-500">
          Contact Us
        </button>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import SplitType from 'split-type'
import * as THREE from 'three'

const canvasRef = ref(null)
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const btn1Ref = ref(null)
const btn2Ref = ref(null)
let scene, camera, renderer, globe, particles, animationId

const initThreeJS = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create globe
  const geometry = new THREE.SphereGeometry(2, 64, 64)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00C2FF,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  })
  globe = new THREE.Mesh(geometry, material)
  scene.add(globe)

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000
  const posArray = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: 0x00C2FF,
    transparent: true
  })
  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  animateThree()
}

const animateThree = () => {
  animationId = requestAnimationFrame(animateThree)

  globe.rotation.x += 0.001
  globe.rotation.y += 0.002
  particles.rotation.y += 0.0005

  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!renderer || !camera) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initThreeJS()

  // GSAP animations
  const headlineSplit = new SplitType(headlineRef.value, { types: 'lines,words' })
  
  gsap.fromTo(
    headlineSplit.words,
    { opacity: 0, y: 100, scale: 0.8 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 1.2, 
      stagger: 0.08,
      ease: 'power4.out'
    }
  )

  gsap.fromTo(
    subheadlineRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
  )

  gsap.fromTo(
    [btn1Ref.value, btn2Ref.value],
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.8, stagger: 0.15, ease: 'power3.out' }
  )

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  if (renderer) {
    renderer.dispose()
  }
})
</script>
