import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function SpecialtySection() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden" style={{ backgroundColor: 'var(--lime)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--soft-black)', marginBottom: '2rem' }}>
              CAFÉ DE<br />ESPECIALIDAD.
            </h2>
            <p style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--soft-black)', marginBottom: '1.5rem', maxWidth: '500px' }}>
              Single-origin beans, expertly roasted.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--warm-gray)', marginBottom: '2rem', maxWidth: '500px' }}>
              Every cup is crafted with precision by our trained baristas. We source our beans directly from sustainable farms, ensuring quality and supporting farmers.
            </p>
            <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg">
              Explore Coffee Menu
            </Button>
          </div>
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjI2MTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Latte art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBjbG9zZXVwfGVufDF8fHx8MTc2MjY3NTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh pastries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
