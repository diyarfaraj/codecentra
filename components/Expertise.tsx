'use client'

import { motion } from 'framer-motion'
import {
  Database,
  Server,
  Globe,
  Code2,
  Layers,
  Monitor
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Expertise() {
  const t = useTranslations('expertise')

  const expertise = [
    {
      title: t('backend.title'),
      description: t('backend.description'),
      icon: Server,
      skills: ['.NET', 'Node.js', 'Python'],
    },
    {
      title: t('database.title'),
      description: t('database.description'),
      icon: Database,
      skills: ['MSSQL Server', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: t('microservices.title'),
      description: t('microservices.description'),
      icon: Layers,
      skills: ['Docker', 'Kubernetes', 'API Gateway'],
    },
    {
      title: t('cloud.title'),
      description: t('cloud.description'),
      icon: Globe,
      skills: ['AWS', 'Azure', 'GCP'],
    },
    {
      title: t('integration.title'),
      description: t('integration.description'),
      icon: Code2,
      skills: ['REST APIs', 'GraphQL', 'gRPC', 'Message Queues'],
    },
    {
      title: t('monitoring.title'),
      description: t('monitoring.description'),
      icon: Monitor,
      skills: ['Prometheus', 'Grafana', 'ELK Stack'],
    },
  ]

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-primary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-primary-900 rounded-2xl p-8 hover:bg-primary-900 dark:hover:bg-primary-800 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 group-hover:bg-accent-500 flex items-center justify-center mb-6 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-accent-600 dark:text-accent-400 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-500">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-300 mb-6 transition-colors duration-500">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-white dark:bg-primary-800 group-hover:bg-primary-800 dark:group-hover:bg-primary-700 text-primary-700 dark:text-gray-300 group-hover:text-accent-400 rounded-full transition-colors duration-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
