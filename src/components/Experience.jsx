import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { trackCTAClick } from '../utils/analytics'
import {
  LINKEDIN_URL,
  LINKEDIN_HANDLE,
  EMAIL_CONTACT,
} from '../constants'

const experiences = [
  {
    title: 'Independent Product Development',
    company: 'Nimph Ventures LLC',
    dateRange: '2020 – Present',
    location: 'Delaware',
    initial: 'N',
  },
  {
    title: 'Operations Manager',
    company: 'Price King Distributors',
    dateRange: '01/2022 – Present',
    location: 'Delaware',
    initial: 'P',
  },
  {
    title: 'Product Management Intern',
    company: 'Best Buy Corporate',
    dateRange: '05/2021 – 08/2021',
    location: 'Remote',
    initial: 'B',
  },
]

const ExperienceEntry = ({ experience, index, isLast }) => {
  const [isInView, setIsInView] = useState(false)
  const entryRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (entryRef.current) {
      observer.observe(entryRef.current)
    }

    return () => {
      if (entryRef.current) {
        observer.unobserve(entryRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={entryRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 mb-10 md:mb-14"
    >
      {/* LEFT COLUMN: Date + Timeline */}
      <div className="flex md:flex-row flex-col md:items-start items-start gap-4">
        {/* Date range */}
        <div className="text-sm text-nimph-gray md:text-right flex-1 md:pt-1">
          <div className="font-medium">{experience.dateRange}</div>
          <div className="text-xs text-nimph-gray/70 mt-1">{experience.location}</div>
        </div>

        {/* Timeline dot + line */}
        <div className="hidden md:flex flex-col items-center absolute left-[160px] top-0 bottom-0 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-nimph-accent border-2 border-nimph-dark flex-shrink-0 mt-1.5" />
          {!isLast && (
            <div className="w-0.5 flex-1 bg-nimph-accent/20 mt-2" />
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Content */}
      <div className="md:pl-4">
        <div className="flex items-start gap-4">
          {/* Company initial badge */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-nimph-accent/10 border border-nimph-accent/20 flex items-center justify-center">
            <span className="text-lg font-bold text-nimph-accent">
              {experience.initial}
            </span>
          </div>

          {/* Title + Company */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-nimph-text leading-snug mb-1">
              {experience.title}
            </h3>
            <div className="text-base font-medium text-nimph-accent">
              {experience.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Founder
          </h2>

          {/* Founder bio */}
          <p className="text-base sm:text-lg text-nimph-text/80 leading-relaxed max-w-3xl mx-auto">
            Dhaval Patel has been building B2B software since 2020 and runs operations at Price
            King Distributors (since 01/2022). He formed Nimph Ventures LLC in 09/2026 to
            commercialize those products. B.S. in Information Technology, Penn State. Open to
            startup Product Manager, Technical Product Manager, and Solutions roles.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceEntry
              key={index}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex flex-wrap gap-4 justify-center"
        >
          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('LinkedIn - Experience', LINKEDIN_HANDLE)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-nimph-surface text-nimph-text rounded-lg border border-nimph-accent/20 hover:border-nimph-accent transition-smooth text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL_CONTACT}`}
            onClick={() => trackCTAClick('Email - Experience', EMAIL_CONTACT)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-nimph-accent text-white rounded-lg hover:bg-nimph-accent-light hover:shadow-lg hover:shadow-nimph-accent/30 transition-smooth text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
