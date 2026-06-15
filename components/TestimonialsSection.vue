<template>
  <section class="py-24 px-4 bg-primary/20">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">What Our Clients Say</h2>
        <p class="font-body text-body-lg text-gray-400">Hear from our happy travelers.</p>
      </div>
      <div class="glass p-10 rounded-2xl">
        <p class="font-body text-xl md:text-2xl text-gray-300 italic mb-6">
          "{{ currentTestimonial.text }}"
        </p>
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">
            {{ currentTestimonial.initials }}
          </div>
          <div>
            <h4 class="font-heading text-xl font-bold">{{ currentTestimonial.name }}</h4>
            <p class="font-body text-gray-400">{{ currentTestimonial.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    text: 'NeutourX made our honeymoon absolutely perfect! The service was exceptional and the prices were unbeatable.',
    name: 'Sarah & John',
    location: 'Dhaka, Bangladesh',
    initials: 'SJ'
  },
  {
    text: 'Fast, reliable, and professional. I always use NeutourX for my business trips.',
    name: 'Mohammed Ali',
    location: 'Chittagong, Bangladesh',
    initials: 'MA'
  },
  {
    text: 'The team at NeutourX is amazing. They helped us plan our family vacation effortlessly.',
    name: 'Fatima Rahman',
    location: 'Sylhet, Bangladesh',
    initials: 'FR'
  }
]

const currentIndex = ref(0)
let interval = null

const currentTestimonial = ref(testimonials[0])

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
    currentTestimonial.value = testimonials[currentIndex.value]
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
