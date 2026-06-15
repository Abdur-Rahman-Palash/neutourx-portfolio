<template>
  <section class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" ref="statRefs" class="glass p-8 rounded-2xl">
          <div class="font-heading text-5xl md:text-6xl font-bold text-secondary mb-2" ref="counterRefs">0</div>
          <p class="font-body text-body-lg text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '5000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Travel Partners' },
  { value: '9+', label: 'Airline Collaborations' },
  { value: '98%', label: 'Customer Satisfaction' }
]

const statRefs = ref([])
const counterRefs = ref([])

const getNumericValue = (str) => {
  return parseInt(str.replace(/\D/g, ''))
}

onMounted(() => {
  statRefs.value.forEach((el, index) => {
    const target = getNumericValue(stats[index].value)

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const obj = { num: 0 }
        gsap.to(obj, {
          num: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            const suffix = stats[index].value.includes('+') ? '+' : (stats[index].value.includes('%') ? '%' : '')
            counterRefs.value[index].innerText = `${Math.floor(obj.num)}${suffix}`
          }
        })
      }
    })
  })
})
</script>
