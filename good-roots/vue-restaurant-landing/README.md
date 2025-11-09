# Modern Restaurant Landing Page - Vue.js

Implementación moderna de una landing page para restaurante construida con **Vue.js 3 (Options API)**, **Vite** y **Tailwind CSS 4**.

## 🚀 Tecnologías Utilizadas

- **Vue.js 3** - Framework progresivo de JavaScript
- **Options API** - API de composición clásica de Vue
- **Vite 7** - Build tool de próxima generación
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide Vue Next** - Biblioteca de iconos
- **JavaScript** - Sin TypeScript para máxima simplicidad

## 📋 Características

- ✅ Navegación responsive con menú móvil
- ✅ Hero section de pantalla completa
- ✅ Grid de menú con hover effects
- ✅ Secciones de comunidad y misión
- ✅ Sección de ubicaciones con mapa pins
- ✅ Footer completo con enlaces y redes sociales
- ✅ Diseño completamente responsive
- ✅ Smooth scrolling entre secciones
- ✅ Imágenes con fallback automático
- ✅ Transiciones y animaciones fluidas

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview del build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes UI reutilizables
│   │   ├── Button.vue         # Componente de botón personalizado
│   │   └── ImageWithFallback.vue  # Imágenes con fallback
│   ├── Navigation.vue         # Navegación principal con scroll detect
│   ├── Hero.vue              # Hero section de pantalla completa
│   ├── FoodRevolution.vue    # Sección de revolución alimentaria
│   ├── MenuGrid.vue          # Grid de menú con 4 columnas
│   ├── CommunitySection.vue  # Sección de comunidad (app móvil)
│   ├── MissionSection.vue    # Sección de misión y valores
│   ├── JoinTeamSection.vue   # Sección de reclutamiento
│   ├── LocationsSection.vue  # Sección de ubicaciones
│   ├── SpecialtySection.vue  # Sección de café especializado
│   └── Footer.vue            # Footer con links y redes sociales
├── App.vue                   # Componente principal
├── main.js                   # Punto de entrada
└── style.css                 # Estilos globales con Tailwind
```

## 🎨 Paleta de Colores

El proyecto utiliza variables CSS personalizadas:

- **Mint Green**: `#b8e6d5` - Sección de comunidad
- **Lime**: `#d4e157` - Sección de café
- **Terracotta**: `#e07856` - Sección de equipo
- **Mustard**: `#f4d06f` - Acentos y degradados
- **Soft Black**: `#1a1a1a` - Texto principal
- **Warm Gray**: `#5a5a5a` - Texto secundario

## 🔧 Configuración

### Vite Config
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()]
})
```

### Tailwind CSS 4
Los estilos están importados directamente en `style.css`:
```css
@import "tailwindcss";
```

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Todos los componentes están optimizados para verse bien en todos los tamaños de pantalla.

## 🎯 Mejores Prácticas Implementadas

1. **Options API** - Uso consistente de la API clásica de Vue
2. **Componentes reutilizables** - Button e ImageWithFallback
3. **Separación de responsabilidades** - Cada componente tiene una responsabilidad única
4. **Props y Data** - Uso correcto de props para comunicación entre componentes
5. **Lifecycle hooks** - mounted/beforeUnmount para event listeners
6. **CSS Variables** - Variables CSS para theming consistente
7. **Responsive classes** - Uso de breakpoints de Tailwind
8. **Semantic HTML** - Uso de etiquetas semánticas apropiadas
9. **Accesibilidad** - Alt text en imágenes, navegación por teclado

## 🌐 Navegación

El sitio incluye navegación por anclas a las siguientes secciones:
- `#menu` - Menú
- `#locations` - Ubicaciones
- `#mission` - Misión
- `#careers` - Carreras

## 🖼️ Componentes Destacados

### Navigation.vue
- Navbar fijo con efecto de scroll
- Menú móvil responsive
- Transiciones suaves

### Button.vue
- Componente reutilizable con variants
- Soporte para iconos
- Estados hover y disabled

### ImageWithFallback.vue
- Manejo automático de errores de carga
- Fallback a placeholder SVG
- Optimización de UX

## 📝 Servidor Local

El servidor de desarrollo está corriendo en: **http://localhost:5173/**

## ⚠️ Notas Importantes

- Se usa `--legacy-peer-deps` debido a incompatibilidades entre Vite 7 y Tailwind CSS 4
- Todas las imágenes usan el componente `ImageWithFallback` para mejor UX
- Los componentes usan el patrón Options API para máxima claridad y compatibilidad
- El proyecto está optimizado para Node.js 20.19+ pero funciona con 20.18.3

---

**Desarrollado con ❤️ usando Vue.js y Tailwind CSS**
