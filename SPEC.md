# Om Catering Tour, Travels & Event Planners - Website Specification

## Concept & Vision

A premium, trust-inspiring business website that radiates warmth and professionalism for an Indian full-service events, travel, and catering company. The site should feel like walking into a well-appointed hospitality brand—elegant orange tones evoke celebration and warmth while clean layouts communicate reliability. Every interaction should feel smooth and intentional, building confidence in potential clients.

## Design Language

### Aesthetic Direction
Premium hospitality brand with Indian celebratory warmth. Think Taj Hotels meets modern wedding planning—luxurious but approachable, celebratory but refined.

### Color Palette
- **Primary Orange**: #ff7a00 (celebration, warmth, energy)
- **Secondary Orange**: #ff9933 (lighter accent)
- **Dark**: #1a1a2e (deep navy-black for contrast)
- **Dark Gray**: #16213e (text, backgrounds)
- **White**: #ffffff (clean space)
- **Cream**: #fff8f0 (soft backgrounds)
- **Gold Accent**: #ffc107 (premium touches)

### Typography
- **Headings**: Playfair Display (elegant serif) - fallback Georgia
- **Body**: Inter (clean, modern) - fallback system-ui
- **Weights**: 400, 500, 600, 700 for body; 600, 700, 800 for headings

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Card border-radius: 16px
- Button border-radius: 8px

### Motion Philosophy
- Subtle entrance animations on scroll (fade-up, 400ms ease-out)
- Smooth hover transitions (200ms)
- Staggered card reveals
- Gentle parallax on hero
- Micro-interactions on buttons (scale 1.02 on hover)

### Visual Assets
- Icons: Lucide React
- Images: High-quality Unsplash (weddings, food, travel, events)
- Decorative: Soft gradient overlays, subtle patterns

## Layout & Structure

### Global Elements
- **Navbar**: Sticky, glassmorphism effect, logo left, links center, CTA right
- **Footer**: 4-column grid (About, Services, Quick Links, Contact), social icons, copyright

### Page Structure

#### 1. Homepage
- Hero: Full-viewport, gradient overlay on image, centered headline + CTAs
- Services Grid: 4 cards with icons, hover lift effect
- About Preview: Image + text split
- Why Choose Us: 4 trust indicators with icons
- Testimonials: Carousel/cards
- CTA Banner: Gradient background, strong call to action
- Quick Contact Form

#### 2. About Page
- Hero banner
- Company story section
- Mission & Vision cards
- Experience stats (years, events, clients)
- Team values

#### 3. Services Page
- Hero
- 4 service categories in expandable sections
- Each with description + feature list + CTA

#### 4. Tour Packages Page
- Filter bar (category, duration, price)
- Package grid (image, title, duration, price, inclusions, CTA)
- Popular badge on featured

#### 5. Gallery Page
- Masonry/grid layout
- Category filter tabs
- Lightbox on click

#### 6. Contact Page
- Split layout: form left, info right
- Google Maps embed
- WhatsApp CTA button

#### 7. Booking Page
- Multi-step form
- Service selector (cards)
- Date picker
- Details input
- Confirmation

## Features & Interactions

### Navigation
- Sticky on scroll with backdrop blur
- Mobile hamburger menu with slide-in drawer
- Active page indicator
- Smooth scroll to sections on homepage

### Forms
- Validation on blur and submit
- Loading state on submit
- Success/error toast notifications
- Input focus animations

### Interactive Elements
- Service cards: scale + shadow on hover
- Gallery images: zoom + overlay on hover
- Testimonials: auto-scroll with pause on hover
- WhatsApp button: pulse animation

### States
- Buttons: default, hover (lift + brighten), active (press), disabled (opacity)
- Inputs: default, focus (border glow), error (red border), success (green)

## Component Inventory

### Navbar
- Logo component
- NavLink component
- Mobile menu toggle
- CTA Button

### Hero Section
- Background image/gradient
- Headline + subheadline
- CTA button group
- Scroll indicator

### Service Card
- Icon
- Title
- Description
- Hover state with lift

### Package Card
- Image
- Badge (popular)
- Title
- Duration + price
- Inclusions list
- CTA button

### Testimonial Card
- Quote
- Author name
- Event type
- Rating stars

### Contact Form
- Input fields with labels
- Textarea
- Submit button
- Form validation

### Footer
- Logo + description
- Service links
- Quick links
- Contact info
- Social icons
- Copyright

## Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

### Architecture
```
/app
  /layout.tsx (root layout with navbar/footer)
  /page.tsx (homepage)
  /about/page.tsx
  /services/page.tsx
  /packages/page.tsx
  /gallery/page.tsx
  /contact/page.tsx
  /booking/page.tsx
/components
  /ui (reusable primitives)
  /sections (page sections)
  /layout (navbar, footer)
/lib
  /data.ts (mock data)
/public
  /images
```

### Performance
- Next.js Image optimization
- Lazy loading for below-fold content
- Font preloading
- Minimal JS bundle
