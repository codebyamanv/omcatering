'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
    UtensilsCrossed,
    Map,
    Sparkles,
    Car,
    ArrowRight,
    Star,
    Award,
    Heart,
    MapPin,
    Phone,
    Mail,
    Clock,
    ChevronDown,
    CheckCircle2,
    Users,
    Briefcase,
    Palmtree,
} from 'lucide-react'
import { services, testimonials, whyChooseUs, companyInfo } from '@/lib/data'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920')",
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-navy/80 to-primary/40" />

                {/* Content */}
                <div className="relative z-10 container-custom text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
                                Welcome to Om Catering
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Your One-Stop Solution for <span className="text-primary">Catering, Travel & Events</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                        >
                            Creating memorable celebrations and journeys across India for over 15 years. Premium
                            services for weddings, corporate events, tours, and more.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                                Book Now
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-4"
                            >
                                Get Quote
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/20"
                        >
                            {[
                                { number: '15+', label: 'Years Experience' },
                                { number: '10,000+', label: 'Events Served' },
                                { number: '50+', label: 'Tour Packages' },
                                { number: '100%', label: 'Vegetarian' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                                        {stat.number}
                                    </p>
                                    <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ChevronDown className="w-8 h-8 text-white/60" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-primary font-semibold text-sm uppercase tracking-wider"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6"
                        >
                            Complete Event & Travel Solutions
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                            From delicious catering to unforgettable journeys, we provide end-to-end services for all
                            your celebration and travel needs.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-6 shadow-lg card-hover group"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                                    {service.id === 'catering' && (
                                        <UtensilsCrossed className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    )}
                                    {service.id === 'travel' && (
                                        <Map className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    )}
                                    {service.id === 'events' && (
                                        <Sparkles className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    )}
                                    {service.id === 'vehicles' && (
                                        <Car className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    )}
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                                <Link
                                    href={`/services#${service.id}`}
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-2xl" />
                                <Image
                                    src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800"
                                    alt="Catering service"
                                    width={600}
                                    height={450}
                                    className="relative rounded-2xl shadow-xl w-full object-cover"
                                />
                                {/* Floating card */}
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Award className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">15+ Years</p>
                                            <p className="text-sm text-gray-500">Of Excellence</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:pl-8"
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                About Us
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                                Creating Memories, <span className="text-primary">One Event at a Time</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Founded in Jaipur with a passion for hospitality, Om Catering has grown into a trusted
                                name across India for premium catering, travel, and event planning services. We believe
                                every celebration deserves perfection.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our team of experienced professionals works tirelessly to ensure your events are
                                memorable, your journeys are comfortable, and your celebrations are nothing short of
                                extraordinary. With 100% vegetarian cuisine and pan-India reach, we cater to diverse
                                tastes while maintaining the highest standards of quality.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: CheckCircle2, text: '100% Vegetarian Menu' },
                                    { icon: Users, text: 'Expert Planning Team' },
                                    { icon: Briefcase, text: 'Corporate Solutions' },
                                    { icon: Palmtree, text: 'Pan-India Tours' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                                Learn More About Us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-gradient-to-br from-dark to-navy text-white">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-primary font-semibold text-sm uppercase tracking-wider"
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6"
                        >
                            The Om Catering <span className="text-primary">Difference</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-300 text-lg">
                            What sets us apart is our unwavering commitment to excellence, personalized service, and
                            attention to every detail.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                                    {item.icon === 'Award' && <Award className="w-7 h-7 text-primary" />}
                                    {item.icon === 'Star' && <Star className="w-7 h-7 text-primary" />}
                                    {item.icon === 'Heart' && <Heart className="w-7 h-7 text-primary" />}
                                    {item.icon === 'MapPin' && <MapPin className="w-7 h-7 text-primary" />}
                                    {item.icon === 'Phone' && <Phone className="w-7 h-7 text-primary" />}
                                    {item.icon === 'Settings' && <Sparkles className="w-7 h-7 text-primary" />}
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Testimonials
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Don't just take our word for it. Here's what our valued clients have to say about their
                            experience with us.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-primary">{testimonial.event}</p>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Plan Your Next Event?
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            Let us help you create an unforgettable experience. Contact us today for a free consultation
                            and customized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/booking"
                                className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Book Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" /> Call Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Form */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Quick Inquiry
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have a question or need a quote? Fill out the form and we'll get back to you within 24
                                hours.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Call Us</p>
                                        <p className="font-semibold">{companyInfo.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email Us</p>
                                        <p className="font-semibold">{companyInfo.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Working Hours</p>
                                        <p className="font-semibold">{companyInfo.timings}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className="bg-cream rounded-2xl p-8 shadow-lg">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Service Interested In</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors">
                                        <option value="">Select a service</option>
                                        <option value="catering">Catering Services</option>
                                        <option value="travel">Tour & Travels</option>
                                        <option value="events">Event Planning</option>
                                        <option value="vehicles">Vehicle Rental</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">Your Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary transition-colors resize-none"
                                    />
                                </div>
                                <button type="submit" className="w-full btn-primary">
                                    Send Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
