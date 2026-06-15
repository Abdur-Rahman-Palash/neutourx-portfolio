<template>
  <section class="py-24 px-4 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Airline Collaborations</h2>
        <p class="font-body text-body-lg text-gray-400 max-w-3xl mx-auto">
          Working with trusted global airlines to ensure the best routes, competitive fares, and reliable travel experiences.
        </p>
      </div>
      <div class="relative overflow-hidden">
        <div class="flex gap-12 animate-marquee whitespace-nowrap">
          <span v-for="(airline, index) in [...airlines, ...airlines]" :key="index"
            class="text-2xl md:text-3xl font-bold text-white/70 hover:text-secondary transition-colors duration-300 cursor-pointer">
            {{ airline }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const airlines = [
  'Emirates',
  'Qatar Airways',
  'Singapore Airlines',
  'Turkish Airlines',
  'Etihad Airways',
  'Biman Bangladesh Airlines',
  'Air Arabia',
  'FlyDubai',
  'Malaysia Airlines'
]
</script>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0) }
  to { transform: translateX(-50%) }
}

.animate-marquee {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}

.animate-marquee span {
  padding-right: 4rem;
}
</style>
