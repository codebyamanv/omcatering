'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
    UtensilsCrossed,
    Map,
    Sparkles,
    Car,
    Calendar,
    Users,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Clock,
    Phone,
    Mail,
} from 'lucide-react'
import { services, companyInfo } from '@/lib/data'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const serviceOptions = [
    { id: 'catering', label: 'Catering Services', icon: UtensilsCrossed, desc: 'Wedding, Corporate, Parties' },
    { id: 'travel', label: 'Tour & Travels', icon: Map, desc: 'Pan-India Tour Packages' },
    { id: 'events', label: 'Event Planning', icon: Sparkles, desc: 'Weddings, Corporate Events' },
    { id: 'vehicles', label: 'Vehicle Rental', icon: Car, desc: 'Cars, Buses, Luxury Vehicles' },
]

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        service: '',
        eventDate: '',
        guestCount: '',
        travelDate: '',
        duration: '',
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const selectService = (serviceId: string) => {
        setFormData({ ...formData, service: serviceId })
        setCurrentStep(2)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    const renderStep1 = () => (
        <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
        >
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Select Your Service</h2>
                <p className="text-gray-600">Choose the type of service you need</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceOptions.map((option) => (
                    <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectService(option.id)}
                        className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer border-2 transition-colors ${
                            formData.service === option.id
                                ? 'border-primary'
                                : 'border-transparent hover:border-primary/30'
                        }`}
                    >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <option.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-2">{option.label}</h3>
                        <p className="text-gray-600 text-sm">{option.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )

    const renderStep2 = () => (
        <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
                <p className="text-gray-600">Tell us about your event or trip</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {formData.service === 'catering' && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-2">Event Date *</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Expected Guest Count *</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 500"
                                        min="50"
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {(formData.service === 'travel' || formData.service === 'events') && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {formData.service === 'travel' ? 'Travel Start Date' : 'Event Date'} *
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Duration</label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary appearance-none bg-white"
                                    >
                                        <option value="">Select duration</option>
                                        <option value="1-3">1-3 Days</option>
                                        <option value="4-6">4-6 Days</option>
                                        <option value="7-10">7-10 Days</option>
                                        <option value="10+">10+ Days</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}

                    {formData.service === 'vehicles' && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-2">Required Date *</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Number of Vehicles</label>
                                <div className="relative">
                                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 2"
                                        min="1"
                                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-2">Your City / Location *</label>
                        <div className="relative">
                            <Map className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="e.g., Jaipur, Rajasthan"
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Additional Details</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Any specific requirements, special requests, or details about your event..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary resize-none"
                    />
                </div>
            </div>

            <div className="flex justify-between">
                <button onClick={() => setCurrentStep(1)} className="btn-secondary flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                    onClick={() => setCurrentStep(3)}
                    className="btn-primary flex items-center gap-2"
                    disabled={
                        (formData.service === 'catering' &&
                            (!formData.eventDate || !formData.guestCount || !formData.city)) ||
                        (formData.service === 'travel' && (!formData.eventDate || !formData.city)) ||
                        (formData.service === 'events' && (!formData.eventDate || !formData.city)) ||
                        (formData.service === 'vehicles' && (!formData.eventDate || !formData.city))
                    }
                >
                    Continue <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    )

    const renderStep3 = () => (
        <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Your Information</h2>
                <p className="text-gray-600">How can we reach you?</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary"
                            required
                        />
                    </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-cream rounded-xl p-6 mt-6">
                    <h4 className="font-semibold mb-4">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-medium">
                                {serviceOptions.find((s) => s.id === formData.service)?.label}
                            </span>
                        </div>
                        {formData.eventDate && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Date:</span>
                                <span className="font-medium">
                                    {new Date(formData.eventDate).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        )}
                        {formData.guestCount && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">
                                    {formData.service === 'vehicles' ? 'Vehicles:' : 'Guests:'}
                                </span>
                                <span className="font-medium">
                                    {formData.guestCount} {formData.service === 'vehicles' ? '' : 'persons'}
                                </span>
                            </div>
                        )}
                        {formData.duration && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Duration:</span>
                                <span className="font-medium">{formData.duration} Days</span>
                            </div>
                        )}
                        {formData.city && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Location:</span>
                                <span className="font-medium">{formData.city}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                    <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="btn-secondary flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                        type="submit"
                        className="btn-primary flex items-center gap-2"
                        disabled={!formData.name || !formData.phone || !formData.email}
                    >
                        <CheckCircle2 className="w-5 h-5" /> Submit Booking
                    </button>
                </div>
            </form>
        </motion.div>
    )

    const renderSuccess = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
        >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Booking Submitted!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for your inquiry. Our team will contact you within 24 hours to discuss your requirements and
                provide a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I just submitted a booking on your website for ${serviceOptions.find((s) => s.id === formData.service)?.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                    <Phone className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
                    Back to Home
                </Link>
            </div>
        </motion.div>
    )

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-cream">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Book Now</span>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
                            Plan Your Event or Trip
                        </h1>
                        <p className="text-lg text-gray-600">
                            Fill out the form below and we'll get back to you with a customized quote tailored to your
                            needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        {/* Progress Steps */}
                        {!isSubmitted && (
                            <div className="flex items-center justify-center mb-12">
                                {[
                                    { step: 1, label: 'Select Service' },
                                    { step: 2, label: 'Event Details' },
                                    { step: 3, label: 'Your Info' },
                                ].map((item, index) => (
                                    <div key={item.step} className="flex items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                                currentStep >= item.step
                                                    ? 'bg-primary text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                            }`}
                                        >
                                            {currentStep > item.step ? <CheckCircle2 className="w-6 h-6" /> : item.step}
                                        </div>
                                        <span
                                            className={`ml-3 font-medium hidden sm:block ${currentStep >= item.step ? 'text-dark' : 'text-gray-400'}`}
                                        >
                                            {item.label}
                                        </span>
                                        {index < 2 && (
                                            <div
                                                className={`w-12 sm:w-24 h-1 mx-4 rounded ${currentStep > item.step ? 'bg-primary' : 'bg-gray-200'}`}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Form Steps */}
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                renderSuccess()
                            ) : (
                                <div className="min-h-[400px]">
                                    {currentStep === 1 && renderStep1()}
                                    {currentStep === 2 && renderStep2()}
                                    {currentStep === 3 && renderStep3()}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-cream">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '15+', label: 'Years Experience' },
                            { number: '10,000+', label: 'Happy Clients' },
                            { number: '100%', label: 'Satisfaction' },
                            { number: '24/7', label: 'Support' },
                        ].map((item, index) => (
                            <div key={index}>
                                <p className="font-heading text-3xl font-bold text-primary">{item.number}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
