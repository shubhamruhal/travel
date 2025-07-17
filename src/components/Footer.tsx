"use client"

import Link from "next/link"
import { Phone, Mail, ChevronUp } from "lucide-react"

// Dummy data arrays
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin/login"}
]

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
]

const contactInfo = {
  address: `123 Dreamy Hills,\nSunset Boulevard,\nWanderland 54321`,
  phone: "+123 456 7890",
  email: "info@adventureaura.com",
}

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-800 font-bold text-sm">A</span>
              </div>
              <h3 className="text-xl font-bold">ADVENTURE AURA</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for extraordinary travel experiences since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact (using fake/mock data) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {contactInfo.address}
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <nav className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 Travel Agency
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
