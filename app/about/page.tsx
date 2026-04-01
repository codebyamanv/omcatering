'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Target, Eye, Heart, Award, Users, Globe, ChefHat, Calendar, ArrowRight } from 'lucide-react'

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

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Experience', icon: Calendar },
    { number: '10,000+', label: 'Events Served', icon: Award },
    { number: '50+', label: 'Tour Packages', icon: Globe },
    { number: '100%', label: 'Vegetarian Cuisine', icon: ChefHat }
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional hospitality services that exceed expectations, creating memorable experiences for every client while maintaining the highest standards of quality, hygiene, and customer satisfaction.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: "To be India's most trusted and preferred partner for catering, travel, and event planning, recognized for our commitment to excellence, innovation, and personalized service."
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, quality, and customer-first approach. We believe in transparent dealings, pure vegetarian preparations, and building lasting relationships with our clients through consistent excellence.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/60" />

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our Story of Excellence
            </h1>
            <p className="text-lg text-gray-200">
              Discover how Om Catering evolved from a small catering service to one of India's most trusted full-service event and travel companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-heading text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-2xl" />
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
                  alt="Team celebration"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2009 in the pink city of Jaipur, Om Catering started with a simple vision: to provide exceptional vegetarian cuisine and service for weddings and events. What began as a small family-run catering business has grown into a comprehensive hospitality company.
                </p>
                <p>
                  Over the years, we expanded our services to include tour & travel packages, event planning, and vehicle rentals, becoming a one-stop solution for all celebration and travel needs. Our commitment to quality, hygiene, and customer satisfaction has earned us the trust of over 10,000 clients across India.
                </p>
                <p>
                  Today, with 15+ years of experience and a team of dedicated professionals, we continue to uphold our founding principles while embracing innovation to serve our clients better.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Mission, Vision & Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-dark to-navy text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              The Om Catering <span className="text-primary">Difference</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Pure Vegetarian', desc: '100% vegetarian cuisine prepared with fresh ingredients and utmost hygiene' },
              { title: 'Expert Team', desc: 'Experienced chefs, planners, and coordinators for flawless execution' },
              { title: 'Pan-India Reach', desc: 'Serving clients across all major cities and destinations in India' },
              { title: 'Customized Solutions', desc: 'Tailored services to match your unique requirements and budget' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support for queries and emergencies' },
              { title: 'Transparent Pricing', desc: 'No hidden costs, clear quotes, and value for every rupee' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="font-heading text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's create something memorable together. Contact us today for your event or travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
