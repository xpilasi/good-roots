import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function JoinTeamSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden" style={{ backgroundColor: 'var(--terracotta)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em', color: 'white', marginBottom: '2rem' }}>
              ÚNETE AL<br />EQUIPO.
            </h2>
            <p style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.7, color: 'white', marginBottom: '2rem', maxWidth: '500px' }}>
              Passionate, hardworking, and honest — that's our team. We're always looking for people who share our values and want to make a difference in how people eat.
            </p>
            <Button className="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 text-lg">
              View Open Positions
            </Button>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1593821915210-e0bac68f370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVhbSUyMHN0YWZmfGVufDF8fHx8MTc2MjY3NTA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team members"
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
