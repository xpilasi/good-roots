<template>
  <section class="relative h-screen w-full overflow-hidden">
    <div class="fixed inset-0 w-full h-screen z-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        alt="People enjoying food at restaurant"
        className="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <Container class="relative h-full flex items-center justify-start z-20">
      <div class="max-w-2xl">
        <h1
          class="text-white mb-6"
          style="font-size: clamp(3rem, 8vw, 7rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.03em"
        >
          NATURALLY<br />GOOD.
        </h1>
        <p
          class="text-white/90 max-w-md"
          style="font-size: 1.125rem; font-weight: 300; line-height: 1.6"
        >
          Fresh, high-quality ingredients. Real food. Real flavor. No compromises.
        </p>
      </div>
    </Container>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import Container from './ui/Container.vue'

export default {
  name: 'Hero',
  components: {
    ImageWithFallback,
    Container
  }
}
</script>
