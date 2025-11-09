<template>
  <section class="py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white via-[#F4D06F]/10 to-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="mb-12">
            <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 0.5rem">
              STARTER.
            </h2>
            <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 0.5rem">
              CHAMP.
            </h2>
            <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 0.5rem">
              STAR.
            </h2>
            <h2 style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; color: var(--soft-black)">
              LEGEND.
            </h2>
          </div>

          <div style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--soft-black); margin-bottom: 2rem">
            EAT<br />REAL.
          </div>

          <p style="font-size: 1.125rem; font-weight: 300; line-height: 1.7; color: var(--warm-gray); max-width: 500px">
            We believe in transparency. Every ingredient is sourced with care. Every dish is made from scratch. No shortcuts, no artificial additives, just real food that nourishes your body and respects the planet.
          </p>
        </div>

        <div class="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGluZ3JlZGllbnRzJTIwY29va2luZ3xlbnwxfHx8fDE3NjI2MDEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fresh ingredients"
            className="w-full h-auto shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageWithFallback from './ui/ImageWithFallback.vue'

export default {
  name: 'MissionSection',
  components: {
    ImageWithFallback
  }
}
</script>
