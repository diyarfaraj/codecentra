'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = () => {
    const newLocale = locale === 'en' ? 'sv' : 'en'
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <button
      onClick={handleLocaleChange}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors"
      aria-label={`Switch to ${locale === 'en' ? 'Swedish' : 'English'}`}
    >
      <Globe size={18} />
      <span className="uppercase">{locale}</span>
    </button>
  )
}
