# Good Roots

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.5.22-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC?logo=tailwind-css)

A modern, high-performance restaurant landing page showcasing a real food philosophy. Built with cutting-edge web technologies to deliver an immersive and responsive user experience.

## 🎯 Project Purpose

Good Roots is a digital showcase for a restaurant brand committed to transparency, quality ingredients, and authentic culinary experiences. The landing page communicates the brand's mission of serving real food without compromises, built from scratch with care for both customers and the planet.

### Core Brand Values
- **Transparency**: Every ingredient is sourced with care
- **Authenticity**: Real food, real flavor, no artificial additives
- **Quality**: Fresh, high-quality ingredients in every dish
- **Sustainability**: Respect for the planet through responsible sourcing

## 🚀 Technology Stack

### Frontend Framework
- **Vue 3** (v3.5.22) - Progressive JavaScript framework using the Composition API with `<script setup>` syntax for enhanced developer experience and performance

### Build Tool
- **Vite** (v7.1.7) - Next-generation frontend tooling providing:
  - Lightning-fast Hot Module Replacement (HMR)
  - Optimized production builds
  - Native ES modules support
  - Efficient code splitting

### Styling
- **Tailwind CSS** (v4.0.0) - Utility-first CSS framework
- **@tailwindcss/vite** (v4.0.0) - Official Vite plugin for seamless integration
- Custom CSS variables for brand consistency
- Responsive design patterns with mobile-first approach

### UI Libraries
- **Lucide Vue Next** (v0.468.0) - Modern icon library with beautiful SVG icons
- **Swiper** (v12.0.3) - Advanced touch slider for interactive carousels and image galleries

## 📁 Project Structure

```
good-roots/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI primitives
│   │   │   ├── Button.vue         # Styled button component
│   │   │   ├── Container.vue      # Responsive layout container
│   │   │   └── ImageWithFallback.vue  # Optimized image component
│   │   ├── Hero.vue               # Full-screen hero section
│   │   ├── Navigation.vue         # Site navigation header
│   │   ├── FoodRevolution.vue     # Brand statement section
│   │   ├── MenuGrid.vue           # Menu showcase with cards
│   │   ├── DishCard.vue           # Individual dish presentation
│   │   ├── CommunitySection.vue   # Community engagement section
│   │   ├── MissionSection.vue     # Mission & values section
│   │   ├── JoinTeamSection.vue    # Career opportunities section
│   │   ├── LocationsSection.vue   # Restaurant locations
│   │   ├── SpecialtySection.vue   # Featured specialties
│   │   └── Footer.vue             # Site footer
│   ├── App.vue                    # Root application component
│   └── main.js                    # Application entry point
├── public/                        # Static assets
├── vite.config.js                 # Vite configuration
├── package.json                   # Project dependencies
└── README.md                      # Project documentation
```

## 🎨 Key Features

### Performance Optimizations
- **Image Optimization**: Custom `ImageWithFallback` component with lazy loading
- **Code Splitting**: Automatic route-based code splitting via Vite
- **Asset Optimization**: Automatic compression and optimization in production builds
- **Fast Refresh**: Instant component updates during development

### Design System
- **Typography Scale**: Responsive clamp() functions for fluid typography
- **Color Palette**: Custom CSS variables for consistent theming
  - Soft Black (`--soft-black`)
  - Warm Gray (`--warm-gray`)
  - Accent Yellow (`#F4D06F`)
- **Layout System**: Reusable `Container` component for consistent spacing

### Responsive Design
- Mobile-first approach with breakpoint-based adaptations
- Full-screen hero section with parallax effects
- Grid-based layouts that adapt to all screen sizes
- Touch-optimized interactions with Swiper integration

### Component Architecture
- **Single File Components (SFC)**: Vue's idiomatic component structure
- **Composition API**: Modern reactive patterns with `<script setup>`
- **Component Reusability**: Shared UI primitives in `/ui` directory
- **Prop-driven Design**: Flexible, configurable components

## 🛠️ Development

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd good-roots

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Development Server
The dev server runs at `http://localhost:5173` with instant hot module replacement for rapid development.

## 🏗️ Build Configuration

### Vite Configuration
The project uses a minimal Vite configuration optimized for Vue 3 and Tailwind CSS:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),        // Vue 3 SFC support
    tailwindcss() // Tailwind CSS v4 integration
  ]
})
```

### Production Build
Production builds are optimized with:
- Tree shaking for minimal bundle size
- Asset compression and optimization
- CSS minification and purging of unused styles
- Source maps for debugging
- Modern ES module output

## 📦 Dependencies

### Core Dependencies
- **vue**: ^3.5.22 - Core framework
- **lucide-vue-next**: ^0.468.0 - Icon library
- **swiper**: ^12.0.3 - Touch slider library

### Development Dependencies
- **@vitejs/plugin-vue**: ^6.0.1 - Official Vue plugin for Vite
- **@tailwindcss/vite**: ^4.0.0 - Tailwind CSS Vite plugin
- **tailwindcss**: ^4.0.0 - Utility-first CSS framework
- **vite**: ^7.1.7 - Build tool and dev server

## 🎯 Design Philosophy

### Visual Language
- **Bold Typography**: Large, impactful headlines using clamp() for fluid scaling
- **High-Quality Imagery**: Professional food photography from Unsplash
- **Minimal Color Palette**: Focus on natural tones with yellow accents
- **Generous White Space**: Clean, breathing room for content

### User Experience
- **Scroll-Driven Narrative**: Story unfolds as users scroll through sections
- **Visual Hierarchy**: Clear content prioritization through size and weight
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Fast load times and smooth interactions

## 🚢 Deployment

The project can be deployed to any static hosting service:

### Build for Production
```bash
npm run build
```

This generates an optimized `dist/` directory ready for deployment.

### Recommended Hosting Platforms
- **Vercel** - Zero-configuration deployment with automatic preview URLs
- **Netlify** - Continuous deployment with form handling and serverless functions
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable enterprise hosting

### Environment Variables
No environment variables are required for the base configuration.

## 📝 Code Quality

### Best Practices Implemented
- **Component Modularity**: Each component has a single, clear responsibility
- **Naming Conventions**: Descriptive, PascalCase component names
- **File Organization**: Logical grouping by feature and reusability
- **Style Scoping**: Component-specific styles when needed
- **Performance First**: Lazy loading and code splitting by default

### Vue 3 Patterns
- Composition API with `<script setup>` for concise, readable code
- Single File Components (SFC) for encapsulated component logic
- Props for component configuration and data flow
- Semantic HTML for better accessibility and SEO

## 🤝 Contributing

This is a private project. For internal development:

1. Create a feature branch from `main`
2. Follow existing code patterns and component structure
3. Test changes locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Commit changes with descriptive messages
6. Create a pull request for review

## 📄 License

Private project - All rights reserved

## 🔗 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Swiper Documentation](https://swiperjs.com/)

---

**Built with Vue 3, Vite, and Tailwind CSS** | **Good Roots - Real Food Revolution**