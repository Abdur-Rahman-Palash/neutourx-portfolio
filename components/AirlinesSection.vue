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
        <div class="animate-marquee flex gap-8 items-center">
          <div
            v-for="(airline, index) in [...airlines, ...airlines]"
            :key="`${airline.name}-${index}`"
            class="flex flex-col items-center gap-3 rounded-3xl bg-white/5 border border-white/10 p-6 w-[180px] md:w-[220px] min-w-[180px] text-center shadow-lg shadow-black/10"
          >
            <div class="h-20 flex items-center justify-center w-full">
              <img
                v-if="airline.logo"
                :src="airline.logo"
                :alt="`${airline.name} logo`"
                class="h-full object-contain"
              />
              <span
                v-else
                class="text-xl md:text-2xl font-bold text-white/80"
              >
                {{ airline.name }}
              </span>
            </div>
            <p class="font-body text-sm text-gray-300">{{ airline.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const airlines = [
  { name: 'Emirates', logo: '/emirates.png' },
  { name: 'Qatar Airways', logo: '/Qatar-airways-animal-logo.png' },
  { name: 'Singapore Airlines', logo: '/singapore airlines.jpg' },
  { name: 'Turkish Airlines', logo: '/Turkish.png' },
  { name: 'Etihad Airways', logo: '/etihad.png' },
  { name: 'Biman Bangladesh Airlines', logo: '/Biman-Logo-English-Copy.svg' },
  { name: 'Air Arabia', logo: '/air arabia.png' },
  { name: 'FlyDubai', logo: '/fly dubai.png' },
  { name: 'Malaysia Airlines', logo: '/malaysian.png' }
]
</script>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  gap: 2rem;
  animation: marquee 24s linear infinite;
  will-change: transform;
}

.animate-marquee > div {
  flex-shrink: 0;
}
</style>
