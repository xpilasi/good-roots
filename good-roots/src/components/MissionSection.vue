<template>
  <section class="overflow-hidden bg-gradient-to-b from-white via-[#F4D06F]/10 to-[#F4D06F]/10 h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch h-full">
      <div class="relative h-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2070&auto=format&fit=crop"
          alt="Fresh ingredients"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Container class="flex flex-col justify-center py-24">
        <div style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 2rem">
          EAT<br />REAL.
        </div>

        <p style="font-size: 1.125rem; font-weight: 300; line-height: 1.7; color: var(--warm-gray); max-width: 500px">
          We believe in transparency. Every ingredient is sourced with care. Every dish is made from scratch. No shortcuts, no artificial additives, just real food that nourishes your body and respects the planet.
        </p>
      </Container>
    </div>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import Container from './ui/Container.vue'

export default {
  name: 'MissionSection',
  components: {
    ImageWithFallback,
    Container
  }
}
</script>
