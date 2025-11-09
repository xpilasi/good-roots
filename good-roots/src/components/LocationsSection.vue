<template>
  <section class="py-24 px-6 md:px-16 lg:px-24 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 3rem">
        NUESTROS<br />LOCALES.
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="location in locations"
          :key="location.id"
          class="group cursor-pointer"
        >
          <div class="relative aspect-[3/4] overflow-hidden mb-4">
            <ImageWithFallback
              :src="location.image"
              :alt="location.name"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--soft-black)">
            {{ location.name }}
          </h3>
          <div class="flex items-start gap-2">
            <MapPin class="w-4 h-4 mt-1 flex-shrink-0" style="color: var(--warm-gray)" />
            <div>
              <p style="font-size: 0.95rem; font-weight: 300; color: var(--warm-gray); line-height: 1.5">
                {{ location.address }}<br />
                {{ location.city }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import { MapPin } from 'lucide-vue-next'

export default {
  name: 'LocationsSection',
  components: {
    ImageWithFallback,
    MapPin
  },
  data() {
    return {
      locations: [
        {
          id: 1,
          name: 'La Vie Madrid',
          address: 'Calle Velázquez, 45',
          city: 'Madrid, 28001',
          image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjc1MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          id: 2,
          name: 'Barcelona Gracia',
          address: 'Carrer Gran de Gràcia, 89',
          city: 'Barcelona, 08012',
          image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjM2MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          id: 3,
          name: 'Valencia Centro',
          address: 'Calle Colón, 23',
          city: 'Valencia, 46004',
          image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjc1MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        },
        {
          id: 4,
          name: 'Sevilla Plaza',
          address: 'Plaza Nueva, 12',
          city: 'Sevilla, 41001',
          image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNjM2MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        }
      ]
    }
  }
}
</script>
