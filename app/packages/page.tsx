'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Filter, Clock, MapPin, CheckCircle2, ArrowRight, Star } from 'lucide-react'
import { tourPackages } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const categories = ['All', 'North India', 'South India', 'West India', 'East India', 'Central India', 'Pilgrimage']

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPackages = tourPackages.filter(pkg => {
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/60" />

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tour Packages</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Explore India With Us
            </h1>
            <p className="text-lg text-gray-200">
              Handpicked tour packages covering India's most breathtaking destinations. From majestic mountains to serene backwaters, find your perfect journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 bg-white border-b sticky top-16 lg:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto justify-start lg:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
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
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {pkg.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {pkg.location}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{pkg.name}</h3>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>

                  {/* Inclusions */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.inclusions.slice(0, 3).map((inc, idx) => (
                      <span
                        key={idx}
                        className="bg-cream text-xs px-2 py-1 rounded text-gray-600"
                      >
                        {inc}
                      </span>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{pkg.inclusions.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="font-heading text-2xl font-bold text-primary">
                        ₹{pkg.price.toLocaleString()}
                        <span className="text-sm text-gray-500 font-normal">/person</span>
                      </p>
                    </div>
                    <Link
                      href="/booking"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors group/btn"
                    >
                      <ArrowRight className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-gray-600 mb-2">No packages found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark to-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Want a Custom Tour Package?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We specialize in creating personalized travel experiences. Tell us your dream destination and we'll design the perfect itinerary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2">
                Plan My Trip <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-dark transition-colors inline-flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
