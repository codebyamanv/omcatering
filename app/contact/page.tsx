'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from 'lucide-react'
import { companyInfo } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/60" />

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-200">
              Have a question or ready to plan your next event? We'd love to hear from you. Get in touch and let's create something memorable together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option value="catering">Catering Services</option>
                    <option value="travel">Tour & Travels</option>
                    <option value="events">Event Planning</option>
                    <option value="vehicles">Vehicle Rental</option>
                    <option value="packages">Tour Packages</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your requirements, event date, expected guest count, etc."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Office Address</p>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone Numbers</p>
                      <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors block">
                        {companyInfo.phone}
                      </a>
                      <a href={`tel:${companyInfo.altPhone}`} className="text-gray-600 hover:text-primary transition-colors block">
                        {companyInfo.altPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email Address</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-primary transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Working Hours</p>
                      <p className="text-gray-600">{companyInfo.timings}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={companyInfo.googleMapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="w-full"
                />
                <div className="p-4">
                  <a
                    href="https://maps.google.com/?q=Vaishali+Nagar+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Navigation className="w-4 h-4" /> Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is your minimum order quantity for catering?',
                a: 'We cater for events with as few as 50 guests. Our packages start from 100 persons for most services. Contact us for smaller gatherings.'
              },
              {
                q: 'Do you provide vegetarian food only?',
                a: 'Yes, we are a 100% vegetarian catering service. All our dishes are prepared without any meat, fish, or eggs. We also have Jain food options available.'
              },
              {
                q: 'How far in advance should I book?',
                a: 'For weddings and large events, we recommend booking 2-3 months in advance. For smaller events, 2-3 weeks is usually sufficient.'
              },
              {
                q: 'Do you offer customized tour packages?',
                a: 'Absolutely! We specialize in creating custom tour packages tailored to your preferences, budget, and travel dates. Contact us with your requirements.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We provide catering services across Rajasthan and major cities in North India. For travel and events, we serve Pan-India.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-xl p-6"
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
