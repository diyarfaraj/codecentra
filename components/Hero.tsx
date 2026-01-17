'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Dark Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-[#234863] to-[#2d5a75]">
        {/* SVG Mesh Network */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Flowing mesh lines - representing the terrain/wave */}
          <g stroke="url(#meshGradient)" strokeWidth="0.5" fill="none" opacity="0.6">
            {/* Wave layer 1 - back */}
            <path d="M0,500 Q150,450 300,480 T600,420 T900,460 T1200,400" />
            <path d="M0,520 Q150,470 300,500 T600,440 T900,480 T1200,420" />
            <path d="M0,540 Q150,490 300,520 T600,460 T900,500 T1200,440" />

            {/* Wave layer 2 - middle */}
            <path d="M0,560 Q200,500 400,540 T800,480 T1200,520" />
            <path d="M0,580 Q200,520 400,560 T800,500 T1200,540" />
            <path d="M0,600 Q200,540 400,580 T800,520 T1200,560" />

            {/* Wave layer 3 - front */}
            <path d="M0,620 Q250,560 500,600 T1000,540 T1200,580" />
            <path d="M0,640 Q250,580 500,620 T1000,560 T1200,600" />
            <path d="M0,660 Q250,600 500,640 T1000,580 T1200,620" />
          </g>

          {/* Vertical connecting lines */}
          <g stroke="#2dd4bf" strokeWidth="0.3" opacity="0.4">
            {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, i) => (
              <line key={`vline-${i}`} x1={x} y1={400 + (i % 3) * 20} x2={x} y2={650 - (i % 2) * 30} />
            ))}
          </g>

          {/* Network nodes */}
          <g filter="url(#glow)">
            {[
              { cx: 650, cy: 380, r: 4 },
              { cx: 750, cy: 420, r: 6 },
              { cx: 850, cy: 400, r: 5 },
              { cx: 950, cy: 450, r: 7 },
              { cx: 700, cy: 480, r: 5 },
              { cx: 800, cy: 500, r: 8 },
              { cx: 900, cy: 470, r: 4 },
              { cx: 1000, cy: 420, r: 6 },
              { cx: 1050, cy: 480, r: 5 },
              { cx: 600, cy: 450, r: 6 },
              { cx: 550, cy: 500, r: 4 },
              { cx: 680, cy: 540, r: 5 },
              { cx: 780, cy: 560, r: 7 },
              { cx: 880, cy: 530, r: 4 },
              { cx: 980, cy: 550, r: 6 },
              { cx: 1080, cy: 520, r: 5 },
              { cx: 620, cy: 580, r: 4 },
              { cx: 720, cy: 600, r: 5 },
              { cx: 820, cy: 620, r: 6 },
              { cx: 920, cy: 590, r: 4 },
            ].map((node, i) => (
              <g key={`node-${i}`}>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r * 2}
                  fill="#2dd4bf"
                  opacity="0.1"
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="#94a3b8"
                  opacity="0.6"
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r * 0.5}
                  fill="#2dd4bf"
                  opacity="0.9"
                />
              </g>
            ))}
          </g>

          {/* Connection lines between nodes */}
          <g stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3">
            <line x1="650" y1="380" x2="750" y2="420" />
            <line x1="750" y1="420" x2="850" y2="400" />
            <line x1="850" y1="400" x2="950" y2="450" />
            <line x1="750" y1="420" x2="700" y2="480" />
            <line x1="700" y1="480" x2="800" y2="500" />
            <line x1="800" y1="500" x2="900" y2="470" />
            <line x1="900" y1="470" x2="1000" y2="420" />
            <line x1="1000" y1="420" x2="1050" y2="480" />
            <line x1="600" y1="450" x2="700" y2="480" />
            <line x1="550" y1="500" x2="600" y2="450" />
            <line x1="680" y1="540" x2="780" y2="560" />
            <line x1="780" y1="560" x2="880" y2="530" />
            <line x1="880" y1="530" x2="980" y2="550" />
            <line x1="980" y1="550" x2="1080" y2="520" />
            <line x1="800" y1="500" x2="780" y2="560" />
            <line x1="700" y1="480" x2="680" y2="540" />
            <line x1="900" y1="470" x2="880" y2="530" />
            <line x1="620" y1="580" x2="720" y2="600" />
            <line x1="720" y1="600" x2="820" y2="620" />
            <line x1="820" y1="620" x2="920" y2="590" />
            <line x1="680" y1="540" x2="620" y2="580" />
            <line x1="780" y1="560" x2="720" y2="600" />
          </g>

          {/* Floating code/data elements on the right */}
          <g fill="#94a3b8" opacity="0.15" fontFamily="monospace" fontSize="10">
            <text x="1000" y="300">{"{ data: true }"}</text>
            <text x="1050" y="340">{"api.connect()"}</text>
            <text x="980" y="380">{"status: 200"}</text>
            <text x="1020" y="350">{"node.sync()"}</text>
          </g>
        </svg>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
              style={{
                left: `${50 + Math.random() * 50}%`,
                top: `${30 + Math.random() * 50}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Architecting Resilient
              <br />
              Backend Infrastructures for
              <br />
              Global Enterprises
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mb-8"
          >
            Specialized consulting in Microservices, Kubernetes, and
            Cloud-Native Solutions for large-scale industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-900 bg-accent-400 rounded-md hover:bg-accent-300 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
