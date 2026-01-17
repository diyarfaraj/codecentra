'use client'

import { motion } from 'framer-motion'

// Industry icons matching the design
const clients = [
  {
    name: 'Automotive',
    icon: (
      <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Sports car silhouette */}
        <path d="M10 35 L15 35 L18 28 L30 25 L50 25 L62 28 L65 35 L70 35" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 28 Q25 22 35 22 L50 22 Q55 22 62 28" strokeLinecap="round" />
        <circle cx="22" cy="35" r="5" />
        <circle cx="58" cy="35" r="5" />
        <circle cx="22" cy="35" r="2" />
        <circle cx="58" cy="35" r="2" />
      </svg>
    ),
  },
  {
    name: 'Luxury Auto',
    icon: (
      <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Mercedes-style three-pointed star */}
        <circle cx="40" cy="25" r="18" />
        <line x1="40" y1="7" x2="40" y2="25" />
        <line x1="40" y1="25" x2="24.5" y2="38" />
        <line x1="40" y1="25" x2="55.5" y2="38" />
      </svg>
    ),
  },
  {
    name: 'Laboratory',
    icon: (
      <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Lab beaker/flask */}
        <path d="M30 8 L30 18 L18 40 L62 40 L50 18 L50 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="26" y1="8" x2="54" y2="8" strokeLinecap="round" />
        <path d="M24 30 Q40 35 56 30" strokeLinecap="round" />
        <circle cx="32" cy="34" r="2" fill="currentColor" />
        <circle cx="45" cy="32" r="1.5" fill="currentColor" />
        <circle cx="40" cy="36" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Engineering',
    icon: (
      <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Gear/cog */}
        <circle cx="40" cy="25" r="8" />
        <circle cx="40" cy="25" r="3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 40 + 11 * Math.cos(rad)
          const y1 = 25 + 11 * Math.sin(rad)
          const x2 = 40 + 16 * Math.cos(rad)
          const y2 = 25 + 16 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" strokeWidth="4" />
        })}
      </svg>
    ),
  },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <div className="w-20 h-12 md:w-24 md:h-14 text-primary-400">
                {client.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
