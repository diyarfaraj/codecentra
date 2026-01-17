'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/codecentra-sweden-ab/', icon: Linkedin },
  { name: 'Email', href: 'mailto:contact@codecentra.se', icon: Mail },
]

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Services', href: '#services' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo-transparent.png"
                  alt="CodeCentra - Software & IT Solutions"
                  width={240}
                  height={60}
                  className="h-10 sm:h-11 md:h-12 w-auto brightness-0 invert"
                />
              </Link>

              <p className="text-primary-300 text-sm max-w-sm mb-6">
                Software and IT solutions for enterprise.
                Trusted by industry leaders.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary-900 flex items-center justify-center text-primary-300 hover:bg-accent-500 hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-300 hover:text-accent-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-800">
          <p className="text-primary-400 text-sm text-center">
            &copy; {new Date().getFullYear()} CodeCentra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
