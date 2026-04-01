import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Om Catering | Tour, Travels & Event Planners - Jaipur, India',
  description: 'Premier catering, tour & travel, and event planning services in India. Expert wedding catering, pan-India tours, event management, and vehicle rental. 15+ years of excellence.',
  keywords: 'catering services, wedding catering, tour packages, event planning, vehicle rental, Jaipur caterers, India tours, corporate events',
  authors: [{ name: 'Om Catering' }],
  openGraph: {
    title: 'Om Catering | Tour, Travels & Event Planners',
    description: 'Your One-Stop Solution for Catering, Travel & Events in India',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
