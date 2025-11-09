import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function CommunitySection() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden" style={{ backgroundColor: 'var(--mint-green)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--soft-black)', marginBottom: '2rem' }}>
              JOIN THE<br />COMMUNITY.
            </h2>
            <p style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--soft-black)', marginBottom: '2rem', maxWidth: '500px' }}>
              Get exclusive rewards, skip the line, and enjoy personalized recommendations with our app.
            </p>
            <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg">
              Download App
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609405098950-3244ab505ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjI2NzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile app"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
