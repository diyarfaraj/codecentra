'use client'

import { motion } from 'framer-motion'
import {
  Cloud,
  Container,
  GitBranch,
  Shield,
  Zap,
  Settings
} from 'lucide-react'

const services = [
  {
    name: 'Cloud Architecture',
    description: 'Scalable cloud solutions',
    icon: Cloud,
  },
  {
    name: 'Kubernetes',
    description: 'Container orchestration',
    icon: Container,
  },
  {
    name: 'CI/CD Pipelines',
    description: 'Automated deployments',
    icon: GitBranch,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade protection',
    icon: Shield,
  },
  {
    name: 'Performance',
    description: 'Optimized systems',
    icon: Zap,
  },
  {
    name: 'DevOps',
    description: 'Streamlined operations',
    icon: Settings,
  },
]

export default function ClientLogos() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 dark:text-white mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for modern enterprise infrastructure
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-6 bg-white dark:bg-primary-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-primary-900/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center mb-4 group-hover:bg-accent-100 dark:group-hover:bg-accent-900/50 transition-colors">
                <service.icon className="w-7 h-7 text-accent-500 dark:text-accent-400" />
              </div>
              <h3 className="font-semibold text-primary-900 dark:text-white text-sm mb-1">
                {service.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
