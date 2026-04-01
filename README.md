# Om Catering - Tour, Travels & Event Planners

A premium, fully responsive business website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **7 Pages**: Homepage, About, Services, Tour Packages, Gallery, Contact, Booking
- **Modern Design**: Orange primary color theme (#ff7a00), glassmorphism effects, smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Lightbox gallery, multi-step booking form, animated sections
- **Premium UX**: Sticky navigation, WhatsApp floating button, smooth scrolling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image optimization with Unsplash

## Folder Structure

```
omcatering/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx  # Services page
│   ├── packages/page.tsx   # Tour packages page
│   ├── gallery/page.tsx     # Gallery page
│   ├── contact/page.tsx    # Contact page
│   └── booking/page.tsx    # Booking form page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Site footer
│   └── ui/
│       └── WhatsAppButton.tsx  # Floating WhatsApp button
├── lib/
│   └── data.ts             # Mock data (services, packages, testimonials)
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd omcatering
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color theme:
- Primary: `#ff7a00` (Orange)
- Secondary: `#ffc107` (Gold)
- Dark: `#1a1a2e` (Navy-black)

### Content
Edit `lib/data.ts` to update:
- Services
- Tour packages
- Testimonials
- Company information

### Images
Replace Unsplash URLs in each page component with your own images in `/public/images/`

## Pages Overview

1. **Homepage** (`/`) - Hero, services overview, testimonials, CTA sections
2. **About** (`/about`) - Company story, mission/vision, stats
3. **Services** (`/services`) - Detailed sections for catering, travel, events, vehicles
4. **Packages** (`/packages`) - Filterable tour packages grid
5. **Gallery** (`/gallery`) - Masonry gallery with lightbox
6. **Contact** (`/contact`) - Form, map, contact info
7. **Booking** (`/booking`) - Multi-step booking form

## License

© 2024 Om Catering Tour, Travels & Event Planners. All rights reserved.
