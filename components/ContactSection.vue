<template>
  <section class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-heading text-4xl md:text-section-heading font-bold mb-6">Get In Touch</h2>
        <p class="font-body text-body-lg text-gray-400">Let's plan your next adventure together.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="glass p-8 rounded-2xl">
          <form class="space-y-6">
            <div>
              <label class="font-body block text-gray-300 mb-2">Name</label>
              <input type="text" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-secondary outline-none">
            </div>
            <div>
              <label class="font-body block text-gray-300 mb-2">Phone</label>
              <input type="tel" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-secondary outline-none">
            </div>
            <div>
              <label class="font-body block text-gray-300 mb-2">Email</label>
              <input type="email" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-secondary outline-none">
            </div>
            <div>
              <label class="font-body block text-gray-300 mb-2">Travel Requirement</label>
              <textarea rows="4" class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-secondary outline-none"></textarea>
            </div>
            <button type="submit" class="font-heading w-full bg-secondary text-primary font-bold py-4 rounded-lg hover:bg-secondary/90 transition-colors">
              Request Consultation
            </button>
          </form>
        </div>
        <div class="space-y-8">
          <div class="glass p-6 rounded-2xl">
            <h3 class="font-heading text-2xl font-bold mb-4">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="font-body text-gray-300">+880 1234 567890</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="font-body text-gray-300">info@neutourx.com</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="font-body text-gray-300">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <button class="font-heading glass px-6 py-4 rounded-xl hover:scale-105 transition-all flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.013 1.023 1.605.309c.476-.141.958-.211 1.441-.206.484-.005.966.065 1.441.206l1.605-.309-.013-1.023a9.857 9.857 0 00-4.275-1.176zm0 0" />
              </svg>
              WhatsApp
            </button>
            <button class="font-heading glass px-6 py-4 rounded-xl hover:scale-105 transition-all flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </button>
            <button class="font-heading glass px-6 py-4 rounded-xl hover:scale-105 transition-all flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
