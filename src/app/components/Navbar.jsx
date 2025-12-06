"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  // Function to determine if the link is active
  const isActive = (path) => pathname === path

  return (
    <section>
      <div className="w-full text-white">
        <nav className="max-w-3xl mx-auto flex items-center justify-between gap-8 py-10 w-full border-b border-neutral-800/60">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center justify-center gap-10 text-sm tracking-tight">
            <Link 
              href="/" 
              className={`font-medium hover:text-white transition-colors duration-300 ${
                isActive('/') ? 'text-white' : 'text-neutral-400'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/work" 
              className={`font-medium hover:text-white transition-colors duration-300 ${
                isActive('/work') ? 'text-white' : 'text-neutral-400'
              }`}
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium hover:text-white transition-colors duration-300 ${
                isActive('/contact') ? 'text-white' : 'text-neutral-400'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
