<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <Container class="mx-auto">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a
          href="#"
          :class="[
            'transition-colors',
            isScrolled ? ' text-black text-2xl font-light tracking-widest' : 'text-white text-2xl font-light tracking-widest'
          ]"
          
        >
          good roots
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="[
              'transition-colors hover:opacity-70',
              isScrolled ? 'text-black' : 'text-white'
            ]"
            style="font-size: 0.95rem; font-weight: 500"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-4">
          <Button
            :class="[
              'rounded-full cursor-pointer',
              isScrolled
                ? 'bg-black !text-white hover:bg-black/90'
                : 'bg-white !text-black hover:bg-white/90'
            ]"
          >
            <ShoppingBag
              :class="[
                'w-4 h-4 mr-2',
                isScrolled ? 'text-white' : 'text-black'
              ]"
            />
            Book your table
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          :class="['md:hidden p-2', isScrolled ? 'text-black' : 'text-white']"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 py-6"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="closeMobileMenu"
            class="text-black hover:text-gray-600 transition-colors px-4 py-2"
            style="font-size: 1rem; font-weight: 500"
          >
            {{ link.name }}
          </a>
          <div class="px-4 pt-4 border-t border-gray-200">
            <Button class="w-full bg-black text-white hover:bg-black/90 rounded-full">
              <ShoppingBag class="w-4 h-4 mr-2" />
              Book your table
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script>
import { Menu, X, ShoppingBag } from 'lucide-vue-next'
import Button from './ui/Button.vue'
import Container from './ui/Container.vue'

export default {
  name: 'Navigation',
  components: {
    Menu,
    X,
    ShoppingBag,
    Button,
    Container
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      navLinks: [
        { name: 'Menu', href: '#menu' },
        { name: 'Locations', href: '#locations' },
        { name: 'About', href: '#mission' },
        // { name: 'Careers', href: '#careers' }
      ]
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
