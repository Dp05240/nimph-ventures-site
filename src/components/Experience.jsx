import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// TODO: Confirm Price King title with Danny: 
// "Operations & Product Owner" (LinkedIn, current) OR "Operations Lead" (resume)
// Currently using LinkedIn version

const experiences = [
  {
    title: 'Founder',
    company: 'Drafsense',
    companyNote: '(Product of Nimph Ventures)',
    dateRange: 'Jul 2025 – Present',
    location: 'Dover, DE',
    description: 'Built a compliant platform for generating remotely created checks (RCCs) under UCC Article 3/4 and Regulation CC — solo, from concept to a bank-tested, real-money-verified product in under 10 days. Checks generated through the platform have been bank-reviewed, printed, deposited, and successfully cleared at real U.S. banks.',
    tags: ['FinTech', 'Compliance', 'Solo-built'],
    initial: 'D',
  },
  {
    title: 'Operations & Product Owner',
    company: 'Price King Distributors',
    dateRange: 'Jan 2021 – Present',
    location: 'Dover, DE',
    description: 'Run day-to-day operations for a multi-location wholesale distributor while owning the entire technology stack built for the business. PSM WebCat — a production B2B catalog and ordering platform now used across multiple locations — originated here, built solo because I knew exactly where the operational pain was.',
    tags: ['Operations', 'B2B SaaS', 'Systems Design'],
    initial: 'P',
  },
  {
    title: 'Best Buy — Progressive Retail & Product Roles',
    company: 'Best Buy',
    dateRange: '2019 – 2022',
    location: 'Philadelphia, PA / Remote',
    description: 'Progressed from seasonal Computing Sales Consultant to Certified Apple Advisor to Product Management Intern — the internship that redirected my career toward product — to Lead, Digital & In-Store Sales, while running Geek Squad repairs and troubleshooting in parallel.',
    tags: ['Retail', 'Product Management', 'Customer Ops'],
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
      className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 mb-12 md:mb-16"
    >
      {/* LEFT COLUMN: Date + Timeline */}
      <div className="flex md:flex-row flex-col md:items-start items-start gap-4">
        {/* Date range - right-aligned on desktop */}
        <div className="text-sm text-nimph-gray md:text-right flex-1 md:pt-1">
          <div className="font-medium">{experience.dateRange}</div>
          <div className="text-xs text-nimph-gray/70 mt-1">{experience.location}</div>
        </div>

        {/* Timeline dot + line - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex flex-col items-center absolute left-[160px] top-0 bottom-0 -translate-x-1/2">
          {/* Dot marker */}
          <div className="w-3 h-3 rounded-full bg-nimph-accent border-2 border-nimph-dark flex-shrink-0 mt-1.5" />
          {/* Connecting line */}
          {!isLast && (
            <div className="w-0.5 flex-1 bg-nimph-accent/20 mt-2" />
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Content */}
      <div className="md:pl-4">
        {/* Avatar badge + header */}
        <div className="flex items-start gap-4 mb-3">
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
              {experience.companyNote && (
                <span className="text-sm text-nimph-gray ml-2">
                  {experience.companyNote}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description - constrained max-width for readability */}
        <p className="text-base text-nimph-text/80 leading-relaxed mb-4 max-w-[600px]">
          {experience.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-nimph-dark/50 text-nimph-text/60 text-xs rounded border border-nimph-text/10"
            >
              {tag}
            </span>
          ))}
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
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-nimph-gray">
            Building production systems from operational reality
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
      </div>
    </section>
  )
}

export default Experience
