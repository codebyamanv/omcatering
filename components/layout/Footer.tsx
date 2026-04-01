'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { companyInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-xl text-white">
                OC
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight">Om Catering</h3>
                <p className="text-xs text-gray-400">Tour, Travels & Events</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium catering, travel, and event planning services across India. Creating memorable experiences since 2009.
            </p>
            <div className="flex gap-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#catering" className="text-gray-400 hover:text-primary transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/services#travel" className="text-gray-400 hover:text-primary transition-colors">
                  Tour & Travels
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="text-gray-400 hover:text-primary transition-colors">
                  Event Planning
                </Link>
              </li>
              <li>
                <Link href="/services#vehicles" className="text-gray-400 hover:text-primary transition-colors">
                  Vehicle Rental
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-primary transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-primary transition-colors">
                  Book Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-primary transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-primary transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-primary transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.timings}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with ❤️ in Jaipur, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
