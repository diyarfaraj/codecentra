'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-24 bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-accent-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>

          <p className="text-lg text-primary-300 mb-10">
            {t('subtitle')}
          </p>

          <a
            href="mailto:contact@codecentra.se"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-primary-900 bg-accent-400 rounded-lg hover:bg-accent-300 transition-colors group"
          >
            <span>contact@codecentra.se</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
