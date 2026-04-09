'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-1">
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-heading font-bold text-xl bg-primary text-white">
                            <Image src="/images/logo.jpg" height={1080} width={1080} alt="logo" />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-heading font-bold text-lg leading-tight text-primary">Om Catering</h1>
                            <p className="text-xs text-gray-600">Tour, Travels & Event Planner</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium transition-colors relative group ${
                                    pathname === link.href ? 'text-primary' : 'text-dark hover:text-primary'
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                                        pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="tel:+918318836649" className="flex items-center gap-2 font-semibold text-primary">
                            <Phone className="w-4 h-4" />
                            <span>+91 83188 36649</span>
                        </a>
                        <Link href="/booking" className="btn-primary text-sm">
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-dark hover:bg-gray-100"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white shadow-lg overflow-hidden"
                    >
                        <div className="container-custom py-4">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                                            pathname === link.href
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-dark hover:bg-gray-100'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t flex flex-col gap-3">
                                    <a
                                        href="tel:+918318836649"
                                        className="flex items-center gap-2 font-semibold text-primary"
                                    >
                                        <Phone className="w-4 h-4" />
                                        +91 83188 36649
                                    </a>
                                    <Link href="/booking" className="btn-primary text-center">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
