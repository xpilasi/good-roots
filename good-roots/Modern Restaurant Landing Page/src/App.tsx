import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FoodRevolution } from './components/FoodRevolution';
import { MenuGrid } from './components/MenuGrid';
import { CommunitySection } from './components/CommunitySection';
import { MissionSection } from './components/MissionSection';
import { JoinTeamSection } from './components/JoinTeamSection';
import { LocationsSection } from './components/LocationsSection';
import { SpecialtySection } from './components/SpecialtySection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
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
  );
}
