'use client'

import { motion } from 'framer-motion'
import { Search, GitPullRequest, Gauge, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

const stepKeys = [
  { key: 'map', icon: Search },
  { key: 'pilot', icon: GitPullRequest },
  { key: 'measure', icon: Gauge },
  { key: 'scale', icon: Rocket },
] as const

export default function HowWeWork() {
  const t = useTranslations('howWeWork')

  const steps = stepKeys.map(({ key, icon }) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    icon,
  }))

  return (
    <section id="how-we-work" className="py-24 bg-white dark:bg-primary-950">
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

        {/* Steps */}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-50 dark:bg-primary-900 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <step.icon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
