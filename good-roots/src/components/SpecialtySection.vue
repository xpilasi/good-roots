<template>
  <section
    class="relative py-24 overflow-hidden"
    style="background-color: var(--lime)"
  >
    <Container class="mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 2rem">
            CAFÉ DE<br />ESPECIALIDAD.
          </h2>
          <p style="font-size: 1.125rem; font-weight: 300; line-height: 1.7; color: var(--soft-black); margin-bottom: 1.5rem; max-width: 500px">
            Single-origin beans, expertly roasted.
          </p>
          <p style="font-size: 1rem; font-weight: 300; line-height: 1.7; color: var(--warm-gray); margin-bottom: 2rem; max-width: 500px">
            Every cup is crafted with precision by our trained baristas. We source our beans directly from sustainable farms, ensuring quality and supporting farmers.
          </p>
          <Button class="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg">
            Explore Coffee Menu
          </Button>
        </div>

        <div class="relative grid grid-cols-2 gap-4">
          <div class="relative aspect-square overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjI2MTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Latte art"
              className="w-full h-full object-cover"
            />
          </div>
          <div class="relative aspect-square overflow-hidden mt-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBjbG9zZXVwfGVufDF8fHx8MTc2MjY3NTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fresh pastries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import Button from './ui/Button.vue'
import Container from './ui/Container.vue'

export default {
  name: 'SpecialtySection',
  components: {
    ImageWithFallback,
    Button,
    Container
  }
}
</script>
