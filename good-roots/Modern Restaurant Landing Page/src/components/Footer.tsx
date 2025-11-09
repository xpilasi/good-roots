import { Instagram, Facebook, Twitter, Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              EAT REAL.
            </h3>
            <p style={{ fontSize: '0.95rem', fontWeight: 300, color: '#999', lineHeight: 1.6 }}>
              Fresh, high-quality ingredients. Real food for real people.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Careers</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.95rem', fontWeight: 300 }}>Terms of Service</a></li>
            </ul>
          </div>
          
          {/* App & Social */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Get the App</h4>
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <Smartphone className="w-5 h-5" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>iOS</span>
              </div>
              <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <Smartphone className="w-5 h-5" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Android</span>
              </div>
            </div>
            
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#666' }}>
            © 2024 Eat Real. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: 300 }}>
              English
            </button>
            <button className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: 300 }}>
              Español
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
