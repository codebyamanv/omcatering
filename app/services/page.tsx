'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { UtensilsCrossed, Map, Sparkles, Car, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { services } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const serviceIcons = {
  catering: UtensilsCrossed,
  travel: Map,
  events: Sparkles,
  vehicles: Car
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/60" />

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Complete Hospitality Solutions
            </h1>
            <p className="text-lg text-gray-200">
              From exquisite catering to seamless travel experiences, we offer end-to-end services for all your celebration and journey needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons]
        const isEven = index % 2 === 0

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? 'lg:order-2' : ''}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">What We Offer:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">Specialized In:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/booking" className="btn-primary inline-flex items-center gap-2">
                      Book This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                      Get Quote
                    </Link>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? 'lg:order-1' : ''}
                >
                  <div className="relative">
                    <div className={`absolute -top-4 ${isEven ? '-left-4' : '-right-4'} w-full h-full bg-primary/20 rounded-2xl`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={450}
                      className="relative rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We understand every event is unique. Contact us and we'll create a customized package tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/packages" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2">
                View Tour Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
