'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, GraduationCap, ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const productKeys = [
  { key: 'saaty', icon: CalendarCheck, href: 'https://saatybooking.com' },
  { key: 'kraftsmedjan', icon: GraduationCap, href: 'https://www.kraftsmedjan.se' },
] as const

export default function Products() {
  const t = useTranslations('products')

  const products = productKeys.map(({ key, icon, href }) => ({
    name: t(`${key}.name`),
    description: t(`${key}.description`),
    link: t(`${key}.link`),
    icon,
    href,
  }))

  return (
    <section id="products" className="py-24 bg-white dark:bg-primary-950">
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-gray-50 dark:bg-primary-900 rounded-2xl p-8 hover:shadow-md dark:hover:bg-primary-800 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 group-hover:bg-accent-500 flex items-center justify-center transition-colors duration-500">
                  <product.icon className="w-6 h-6 text-accent-600 dark:text-accent-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full">
                  {t('badge')}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-3">
                {product.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                {product.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-400">
                {product.link}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
