<template>
  <section class="py-16 bg-white">
    <Container class="mx-auto relative">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="24"
        :pagination="{
          el: '.swiper-pagination-custom',
          clickable: true
        }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 }
        }"
        class="pb-16"
      >
        <SwiperSlide
          v-for="item in menuItems"
          :key="item.id"
        >
          <DishCard
            :id="item.id"
            :name="item.name"
            :image="item.image"
            :description="item.description"
            :bg-color="item.bgColor"
          />
        </SwiperSlide>

        <!-- Custom Pagination -->
        <div class="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
      </Swiper>
    </Container>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import DishCard from './DishCard.vue'
import Container from './ui/Container.vue'

export default {
  name: 'MenuGrid',
  components: {
    Swiper,
    SwiperSlide,
    DishCard,
    Container
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
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
        },
        {
          id: 5,
          name: 'Buddha Bowl',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          description: 'Quinoa, roasted chickpeas, tahini',
          bgColor: '#E8F3F1'
        },
        {
          id: 6,
          name: 'Acai Power',
          image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          description: 'Acai, granola, fresh berries',
          bgColor: '#F3E5F5'
        },
        {
          id: 7,
          name: 'Green Energy',
          image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          description: 'Spinach, matcha, tropical fruits',
          bgColor: '#E8F8E8'
        },
        {
          id: 8,
          name: 'Protein Stack',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          description: 'Grilled chicken, sweet potato, kale',
          bgColor: '#FFF8E1'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Minimal CSS for Swiper's dynamically generated pagination bullets */
.swiper-pagination-custom :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #d1d5db;
  opacity: 1;
  transition: all 0.3s;
}

.swiper-pagination-custom :deep(.swiper-pagination-bullet-active) {
  background: #10b981;
  width: 32px;
  border-radius: 9999px;
}
</style>
