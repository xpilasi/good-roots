import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#mission' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className={`transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            EAT REAL.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                style={{ fontSize: '0.95rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className={`rounded-full ${
                isScrolled
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Book your table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-black' : 'text-white'}`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black hover:text-gray-600 transition-colors px-4 py-2"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Book your table
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
