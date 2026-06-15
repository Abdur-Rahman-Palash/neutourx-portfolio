<template>
  <section id="destinations" class="py-24 px-4 bg-primary/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Popular Destinations</h2>
        <p class="font-body text-body-lg text-gray-400">Explore amazing places around the world.</p>
      </div>
      
      <div class="overflow-x-auto pb-8">
        <div class="flex gap-6 min-w-max">
          <div v-for="(destination, index) in destinations" :key="destination.name"
            class="group relative overflow-hidden rounded-2xl w-80 h-96 flex-shrink-0 cursor-pointer">
            <img :src="destination.image" :alt="destination.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 class="text-3xl font-bold">{{ destination.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Turkey',
    image: 'https://images.unsplash.com/photo-1504553101383-1633c6b0d758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1526481280698-8ee1f3a8fa53?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1535008652995-e95986556d6e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Saudi Arabia',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80'
  }
]
</script>
