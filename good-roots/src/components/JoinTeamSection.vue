<template>
  <section
    class="relative py-24 overflow-hidden"
    style="background-color: var(--terracotta)"
  >
    <Container class="mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: white; margin-bottom: 2rem">
            ÚNETE AL<br />EQUIPO.
          </h2>
          <p style="font-size: 1.125rem; font-weight: 300; line-height: 1.7; color: white; margin-bottom: 2rem; max-width: 500px">
            Passionate, hardworking, and honest — that's our team. We're always looking for people who share our values and want to make a difference in how people eat.
          </p>
          <Button class="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 text-lg">
            View Open Positions
          </Button>
        </div>

        <div class="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1593821915210-e0bac68f370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVhbSUyMHN0YWZmfGVufDF8fHx8MTc2MjY3NTA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team members"
            className="w-full h-auto shadow-2xl"
          />
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
  name: 'JoinTeamSection',
  components: {
    ImageWithFallback,
    Button,
    Container
  }
}
</script>
