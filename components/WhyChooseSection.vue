<template>
  <section class="py-24 px-4 bg-primary/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Why Choose NeutourX</h2>
        <p class="font-body text-body-lg text-gray-400">The best choice for your travel needs.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.title" class="glass p-8 rounded-2xl text-center">
          <div class="mb-4 flex justify-center">
            <component :is="feature.icon" />
          </div>
          <h3 class="font-heading text-card-title font-bold mb-2">{{ feature.title }}</h3>
          <p class="font-body text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const PricingIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-16 h-16 text-secondary' }, [
  h('path', { d: 'M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' })
])

const SpeedIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-16 h-16 text-accent' }, [
  h('path', { d: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }),
  h('path', { d: 'M13 3v5h5' }, { fill: 'none', stroke: 'currentColor', 'stroke-width': '2' })
])

const SupportIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-16 h-16 text-secondary' }, [
  h('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-4h-8V8h8v2z' })
])

const NetworkIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', class: 'w-16 h-16 text-accent' }, [
  h('path', { d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-16 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.89 1.97 1.74 1.97 2.95v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z', transform: 'scale(0.75) translate(3, 3)' })
])

const features = [
  {
    title: 'Affordable Pricing',
    description: 'We provide highly competitive travel pricing without compromising service quality.',
    icon: PricingIcon
  },
  {
    title: 'Fast Delivery',
    description: 'Most travel documents and ticketing requests are processed quickly and efficiently.',
    icon: SpeedIcon
  },
  {
    title: 'Reliable Support',
    description: 'Dedicated customer support throughout your journey.',
    icon: SupportIcon
  },
  {
    title: 'Trusted Network',
    description: 'Strong collaborations with leading airlines and travel partners.',
    icon: NetworkIcon
  }
]
</script>
