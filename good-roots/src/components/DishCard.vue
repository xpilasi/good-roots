<template>
  <div class="group cursor-pointer h-full flex flex-col bg-white  overflow-hidden s transition-all duration-500 transform hover:-translate-y-2">
    <!-- Image Container -->
    <div class="relative aspect-[3/4] overflow-hidden">
      <div
        class="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        :class="bgColorClass"
      >
        <ImageWithFallback
          :src="image"
          :alt="name"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <!-- Card Content -->
    <div class="p-6 flex-grow flex flex-col">
      <!-- Title with Arrow -->
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
          {{ name }}
        </h3>
        <div class="text-black transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
          <ArrowRight :size="24" :stroke-width="2.5" />
        </div>
      </div>

      <!-- Description -->
      <p class="text-base text-gray-600 font-light leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import { ArrowRight } from 'lucide-vue-next'

export default {
  name: 'DishCard',
  components: {
    ImageWithFallback,
    ArrowRight
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'bg-gray-50'
    }
  },
  computed: {
    bgColorClass() {
      // Map background colors to Tailwind classes
      const colorMap = {
        '#FFF5E1': 'bg-amber-50',
        '#FFE5E5': 'bg-rose-50',
        '#E8F5E9': 'bg-emerald-50',
        '#FFF3E0': 'bg-orange-50'
      }
      return colorMap[this.bgColor] || this.bgColor
    }
  }
}
</script>
