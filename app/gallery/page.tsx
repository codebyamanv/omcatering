'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { galleryImages } from '@/lib/data'

const categories = ['All', 'Wedding', 'Food', 'Travel', 'Event', 'Vehicle']
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'All' || img.category === activeCategory
  )

  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigate = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return
    if (direction === 'prev') {
      setSelectedImage(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1].id)
    } else {
      setSelectedImage(filteredImages[currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1].id)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/60" />

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our Work Speaks
            </h1>
            <p className="text-lg text-gray-200">
              Browse through our collection of memorable events, exquisite food, breathtaking destinations, and premium vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b sticky top-16 lg:top-20 z-40">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto justify-start lg:justify-center pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => openLightbox(img.id)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <ZoomIn className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-white font-medium">{img.alt}</p>
                    <p className="text-white/70 text-sm">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate('prev') }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate('next') }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find(img => img.id === selectedImage) && (
                <>
                  <Image
                    src={filteredImages.find(img => img.id === selectedImage)!.src}
                    alt={filteredImages.find(img => img.id === selectedImage)!.alt}
                    width={1200}
                    height={800}
                    className="object-contain rounded-lg w-full h-auto max-h-[85vh]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <p className="text-white font-medium">{filteredImages.find(img => img.id === selectedImage)!.alt}</p>
                    <p className="text-white/70 text-sm">{filteredImages.find(img => img.id === selectedImage)!.category}</p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Want to See More of Our Work?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Follow us on social media for daily updates, behind-the-scenes content, and more stunning visuals.
            </p>
            <a
              href="https://instagram.com/omcatering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Follow @OmCatering on Instagram
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
