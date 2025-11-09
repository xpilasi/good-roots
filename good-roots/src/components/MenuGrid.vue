<template>
  <section class="py-16 px-6 md:px-16 lg:px-24 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="group cursor-pointer"
        >
          <div
            class="relative aspect-[3/4] overflow-hidden mb-4"
            :style="{ backgroundColor: item.bgColor }"
          >
            <ImageWithFallback
              :src="item.image"
              :alt="item.name"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--soft-black)">
            {{ item.name }}
          </h3>
          <p style="font-size: 0.95rem; font-weight: 300; color: var(--warm-gray); margin-bottom: 1rem">
            {{ item.description }}
          </p>
          <Button class="w-full bg-black hover:bg-black/90 text-white rounded-full">
            Book your table
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import Button from './ui/Button.vue'

export default {
  name: 'MenuGrid',
  components: {
    ImageWithFallback,
    Button
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: 'Poke Greengae',
          image: 'https://images.unsplash.com/photo-1692384196114-746749434cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGhlYWx0aHklMjBib3dsfGVufDF8fHx8MTc2MjY3NTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'Fresh salmon, edamame, avocado',
          bgColor: '#FFF5E1'
        },
        {
          id: 2,
          name: 'Market Plates',
          image: 'https://images.unsplash.com/photo-1651978595428-b79169f223a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc2FsYWQlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MjY3NTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'Seasonal greens, roasted vegetables',
          bgColor: '#FFE5E5'
        },
        {
          id: 3,
          name: 'Garden Bowls',
          image: 'https://images.unsplash.com/photo-1696454599025-42b5089f58dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbiUyMGJvd2wlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI2NzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'Ancient grains, fresh herbs',
          bgColor: '#E8F5E9'
        },
        {
          id: 4,
          name: 'Salads',
          image: 'https://images.unsplash.com/photo-1751200884901-c1c6f43ae1d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpenphJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NjI2NzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          description: 'Artisan pizza, natural ingredients',
          bgColor: '#FFF3E0'
        }
      ]
    }
  }
}
</script>
