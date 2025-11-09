import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1664428376383-799654030b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBlbmpveWluZyUyMGhlYWx0aHklMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MjY3NTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="People enjoying healthy food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-start px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            EAT<br />REAL.
          </h1>
          <p className="text-white/90 max-w-md" style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.6 }}>
            Fresh, high-quality ingredients. Real food. Real flavor. No compromises.
          </p>
        </div>
      </div>
    </section>
  );
}
