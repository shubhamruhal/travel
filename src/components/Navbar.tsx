"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent text-white">
      <div className="w-full px-6 lg:px-12 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="Logo flex items-center">
          <Link href="/" className="text-3xl font-bold">Adventure Aura</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-all duration-200 hover:text-orange-500 ${
                  pathname === link.href
                    ? 'text-orange-500 font-semibold underline underline-offset-4'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 text-white px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xl transition-all duration-200 ${
                pathname === link.href ? 'text-orange-500 font-semibold underline underline-offset-4' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
