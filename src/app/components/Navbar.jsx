"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  // Function to determine if the link is active
  const isActive = (path) => pathname === path

  return (
    <section>
      <div className="w-full bg-neutral-950 text-white">
        <nav className="max-w-3xl mx-auto flex items-center justify-center gap-12 py-16 w-full">
          <Link 
            href="/" 
            className={`font-semibold hover:text-green-400 transition-colors duration-300 ${
              isActive('/') ? 'text-green-400' : ''
            }`}
          >
            HOME
          </Link>
          <Link 
            href="/work" 
            className={`font-semibold hover:text-green-400 transition-colors duration-300 ${
              isActive('/work') ? 'text-green-400' : ''
            }`}
          >
            WORK
          </Link>
          <Link 
            href="/contact" 
            className={`font-semibold hover:text-green-400 transition-colors duration-300 ${
              isActive('/contact') ? 'text-green-400' : ''
            }`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Navbar