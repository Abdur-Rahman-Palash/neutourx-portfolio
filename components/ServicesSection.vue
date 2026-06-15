<template>
  <section id="services" class="py-24 px-4 bg-primary/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Our Services</h2>
        <p class="font-body text-body-lg text-gray-400">Comprehensive travel solutions tailored for you.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(service, index) in services" :key="service.name"
          ref="magneticElements"
          class="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          @mousemove="(e) => handleMagnetic(e, index)"
          @mouseleave="resetMagnetic(index)">
          <div class="w-16 h-16 mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
            <component :is="service.icon" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="font-heading text-card-title font-bold mb-3">{{ service.name }}</h3>
          <p class="font-body text-gray-400">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, ref } from 'vue'
import gsap from 'gsap'

// Define SVG icons
const PlaneIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021-1.73z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3.27 6.96L12 12l8.73-5.04M12 22V12' })
])

const GlobeIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('circle', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', cx: '12', cy: '12', r: '10' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12h18M12 3v18' })
])

const PackageIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m0 0l-8-4m8 4v13m8H4V11l8-4v13m0 0l8 8-8 8-8-8' })
])

const PassportIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
])

const HotelIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h3M5 21H2' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 10h18M3 14h18M3 18h18M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01' })
])

const BriefcaseIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13V8a2 2 0 00-2-2h-5V3a1 1 0 00-1-1H8a1 1 0 00-1 1v3H5a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 21h6' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 17h6' })
])

const BuildingIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h3M5 21H2m15 0h1' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 10h18M3 14h18M3 18h18M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01' })
])

const UsersIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' })
])

const services = [
  { name: 'Domestic Air Tickets', description: 'Book flights within your country.', icon: PlaneIcon },
  { name: 'International Air Tickets', description: 'Fly to any destination worldwide.', icon: GlobeIcon },
  { name: 'Tour Packages', description: 'All-inclusive travel packages.', icon: PackageIcon },
  { name: 'Visa Assistance', description: 'Get help with your visa applications.', icon: PassportIcon },
  { name: 'Hotel Reservations', description: 'Book luxury accommodations.', icon: HotelIcon },
  { name: 'Travel Consultation', description: 'Expert travel advice.', icon: BriefcaseIcon },
  { name: 'Corporate Travel', description: 'Business travel solutions.', icon: BuildingIcon },
  { name: 'Group Travel', description: 'Plan trips with friends and family.', icon: UsersIcon }
]

const magneticElements = ref([])

const handleMagnetic = (e, index) => {
  if (!magneticElements.value[index]) return
  const el = magneticElements.value[index]
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: 'power3.out' })
}
const resetMagnetic = (index) => {
  if (!magneticElements.value[index]) return
  gsap.to(magneticElements.value[index], { x: 0, y: 0, duration: 0.5, ease: 'power3.out' })
}
</script>
