'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const t = useTranslations('hero')

  useEffect(() => {
    const video1 = videoRef.current
    const video2 = video2Ref.current
    if (!video1 || !video2) return

    // Slow motion - 0.3 = very slow, 0.5 = half speed
    const playbackSpeed = 0.35
    video1.playbackRate = playbackSpeed
    video2.playbackRate = playbackSpeed

    let isTransitioning = false

    const handleTimeUpdate = () => {
      // Start crossfade 1.5 seconds before end for smoother transition
      const timeRemaining = video1.duration - video1.currentTime

      if (timeRemaining < 1.5 && !isTransitioning) {
        isTransitioning = true
        video2.currentTime = 0
        video2.play()
        // Gradual fade in
        video2.style.opacity = '1'
      }
    }

    const handleEnded = () => {
      // Swap videos - video2 becomes the main one
      video1.currentTime = 0
      video1.style.opacity = '0'

      // After transition completes, reset for next loop
      setTimeout(() => {
        video1.play()
        isTransitioning = false
        // Prepare for next swap
        setTimeout(() => {
          video1.style.opacity = '1'
          video2.style.opacity = '0'
        }, 1000)
      }, 500)
    }

    video1.addEventListener('timeupdate', handleTimeUpdate)
    video1.addEventListener('ended', handleEnded)

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate)
      video1.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row md:items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Second video for seamless loop */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: 0 }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* White/Dark overlay - gradient from bottom on mobile, from left on desktop */}
        <div
          className="absolute inset-0 hidden md:block dark:hidden"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0) 60%)'
          }}
        />
        <div
          className="absolute inset-0 hidden md:dark:block"
          style={{
            background: 'linear-gradient(to right, rgba(15,30,51,1) 0%, rgba(15,30,51,1) 35%, rgba(15,30,51,0.8) 45%, rgba(15,30,51,0) 60%)'
          }}
        />
        <div
          className="absolute inset-0 md:hidden dark:hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 75%)'
          }}
        />
        <div
          className="absolute inset-0 md:hidden hidden dark:block"
          style={{
            background: 'linear-gradient(to bottom, rgba(15,30,51,0) 0%, rgba(15,30,51,0.3) 40%, rgba(15,30,51,0.9) 60%, rgba(15,30,51,1) 75%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-auto md:mt-0 pt-48 pb-10 md:pt-20 md:pb-0">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white leading-tight mb-4 md:mb-6">
            {t('title')}
            <br />
            {t('titleLine2')}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6 md:mb-8">
            {t('subtitle')}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent-500 rounded-md hover:bg-accent-600 transition-colors"
          >
            {t('cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
