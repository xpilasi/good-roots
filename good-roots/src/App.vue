<template>
  <div class="min-h-screen bg-white">
    <Navigation />
    <Hero />
    <div class="relative z-10 bg-white">
      <FoodRevolution />
      <div id="menu">
        <MenuGrid />
      </div>
      <CommunitySection />
      <div id="mission">
        <MissionSection />
      </div>
      <div id="careers">
        <JoinTeamSection />
      </div>
      <div id="locations">
        <LocationsSection />
      </div>
      <SpecialtySection />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import FoodRevolution from './components/FoodRevolution.vue'
import MenuGrid from './components/MenuGrid.vue'
import CommunitySection from './components/CommunitySection.vue'
import MissionSection from './components/MissionSection.vue'
import JoinTeamSection from './components/JoinTeamSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import SpecialtySection from './components/SpecialtySection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    FoodRevolution,
    MenuGrid,
    CommunitySection,
    MissionSection,
    // JoinTeamSection,
    LocationsSection,
    SpecialtySection,
    Footer
  }
}
</script>
