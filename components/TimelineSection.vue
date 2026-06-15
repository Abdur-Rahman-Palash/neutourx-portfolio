<template>
  <section class="py-24 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Delivery Timeline</h2>
        <p class="font-body text-body-lg text-gray-400">Fast and reliable service delivery.</p>
      </div>
      <div class="space-y-8">
        <div v-for="item in timeline" :key="item.title" class="flex gap-6">
          <div class="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
          <div class="glass p-6 rounded-2xl flex-1">
            <h3 class="font-heading text-2xl font-bold mb-2">{{ item.title }}</h3>
            <p class="font-body text-gray-400">{{ item.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  { title: 'Air Ticket Confirmation', duration: 'Within Hours' },
  { title: 'Visa Consultation', duration: '1–2 Business Days' },
  { title: 'Tour Planning', duration: '2–5 Business Days' },
  { title: 'Custom Travel Solutions', duration: 'Based on Requirements' }
]
</script>
