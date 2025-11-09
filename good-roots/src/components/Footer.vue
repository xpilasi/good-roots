<template>
  <footer class="bg-black text-white py-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <h3 style="font-size: 2rem; font-weight: 900; margin-bottom: 1rem; letter-spacing: -0.02em">
            EAT REAL.
          </h3>
          <p style="font-size: 0.95rem; font-weight: 300; color: #999; line-height: 1.6">
            Fresh, high-quality ingredients. Real food for real people.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors"
                style="font-size: 0.95rem; font-weight: 300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem">Support</h4>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors"
                style="font-size: 0.95rem; font-weight: 300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- App & Social -->
        <div>
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1.5rem">Get the App</h4>
          <div class="flex gap-4 mb-6">
            <div
              class="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <Smartphone class="w-5 h-5" />
              <span style="font-size: 0.85rem; font-weight: 600">iOS</span>
            </div>
            <div
              class="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <Smartphone class="w-5 h-5" />
              <span style="font-size: 0.85rem; font-weight: 600">Android</span>
            </div>
          </div>

          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem">Follow Us</h4>
          <div class="flex gap-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Instagram class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Facebook class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Twitter class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p style="font-size: 0.875rem; font-weight: 300; color: #666">
          © 2024 Eat Real. All rights reserved.
        </p>
        <div class="flex gap-6">
          <button
            class="text-gray-400 hover:text-white transition-colors"
            style="font-size: 0.875rem; font-weight: 300"
          >
            English
          </button>
          <button
            class="text-gray-400 hover:text-white transition-colors"
            style="font-size: 0.875rem; font-weight: 300"
          >
            Español
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Instagram, Facebook, Twitter, Smartphone } from 'lucide-vue-next'

export default {
  name: 'Footer',
  components: {
    Instagram,
    Facebook,
    Twitter,
    Smartphone
  },
  data() {
    return {
      quickLinks: [
        { name: 'Menu', href: '#' },
        { name: 'Locations', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' }
      ],
      supportLinks: [
        { name: 'Contact', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  }
}
</script>
