<template>
  <section
    class="relative overflow-hidden"
    style="background-color: var(--mint-green)"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch">
      <Container :noPadding="false" class="flex flex-col justify-center py-24">
        <h2 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 2rem">
          JOIN THE<br />COMMUNITY.
        </h2>
        <p style="font-size: 1.125rem; font-weight: 300; line-height: 1.7; color: var(--soft-black); margin-bottom: 2rem; max-width: 500px">
          Get exclusive rewards, skip the line, and enjoy personalized recommendations with our app.
        </p>
        <Button class="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg">
          Download App
        </Button>
      </Container>

      <div class="relative h-full min-h-[500px] lg:min-h-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609405098950-3244ab505ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjI2NzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mobile app"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'
import Button from './ui/Button.vue'
import Container from './ui/Container.vue'

export default {
  name: 'CommunitySection',
  components: {
    ImageWithFallback,
    Button,
    Container
  }
}
</script>
