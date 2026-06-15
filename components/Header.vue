<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
        NeutourX
      </a>
      <nav class="hidden md:flex gap-8">
        <a href="#" class="text-white/80 hover:text-secondary transition-colors">Home</a>
        <a href="#about" class="text-white/80 hover:text-secondary transition-colors">About</a>
        <a href="#services" class="text-white/80 hover:text-secondary transition-colors">Services</a>
        <a href="#destinations" class="text-white/80 hover:text-secondary transition-colors">Destinations</a>
        <a href="#contact" class="text-white/80 hover:text-secondary transition-colors">Contact</a>
      </nav>
      <button class="md:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
</script>
