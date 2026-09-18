import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Founder',
    company: 'Drafsense',
    companyNote: '(Product of Nimph Ventures)',
    meta: 'Jul 2025 – Present · Dover, DE',
    description: 'Built a compliant platform for generating remotely created checks (RCCs) under UCC Article 3/4 and Regulation CC — solo, from concept to a bank-tested, real-money-verified product in under 10 days. Checks generated through the platform have been bank-reviewed, printed, deposited, and successfully cleared at real U.S. banks.',
    tags: ['FinTech', 'Compliance', 'Solo-built'],
  },
  {
    title: 'Operations & Product Owner',
    titleNote: '<!-- CONFIRM WITH DANNY: "Operations & Product Owner" (LinkedIn, current) OR "Operations Lead" (resume) — using LinkedIn version as default, replace if Danny says otherwise -->',
    company: 'Price King Distributors',
    meta: 'Jan 2021 – Present · Dover, DE',
    description: 'Run day-to-day operations for a multi-location wholesale distributor while owning the entire technology stack built for the business. PSM WebCat — a production B2B catalog and ordering platform now used across multiple locations — originated here, built solo because I knew exactly where the operational pain was.',
    tags: ['Operations', 'B2B SaaS', 'Systems Design'],
  },
  {
    title: 'Best Buy — Progressive Retail & Product Roles',
    company: 'Best Buy',
    meta: '2019 – 2022 · Philadelphia, PA / Remote',
    description: 'Progressed from seasonal Computing Sales Consultant to Certified Apple Advisor to Product Management Intern — the internship that redirected my career toward product — to Lead, Digital & In-Store Sales, while running Geek Squad repairs and troubleshooting in parallel.',
    tags: ['Retail', 'Product Management', 'Customer Ops'],
  },
]

const ExperienceCard = ({ experience, index, isLast }) => {
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Timeline spine - desktop only */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        {/* Dot marker */}
        <div className="w-3 h-3 rounded-full bg-nimph-accent border-2 border-nimph-dark flex-shrink-0 mt-3" />
        {/* Connecting line */}
        {!isLast && (
          <div className="w-0.5 h-full bg-nimph-accent/20 mt-2" />
        )}
      </div>

      {/* Card content */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 bg-nimph-surface rounded-xl p-6 sm:p-8 transition-smooth border border-nimph-accent/10 mb-6 sm:mb-8 hover:border-nimph-accent/20"
      >
        {/* Title with optional HTML comment note */}
        <div className="mb-2">
          {experience.titleNote && (
            <div className="text-xs text-nimph-gray/60 mb-1 font-mono">
              {experience.titleNote}
            </div>
          )}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-nimph-text">
            {experience.title}
          </h3>
        </div>

        {/* Company */}
        <div className="mb-3">
          <span className="text-lg font-medium text-nimph-accent">
            {experience.company}
          </span>
          {experience.companyNote && (
            <span className="text-sm text-nimph-gray ml-2">
              {experience.companyNote}
            </span>
          )}
        </div>

        {/* Meta - date and location */}
        <div className="text-sm text-nimph-gray mb-4">
          {experience.meta}
        </div>

        {/* Description */}
        <p className="text-base text-nimph-text/80 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Tags - reuse product card chip style */}
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
      </motion.div>
    </div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
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
            <ExperienceCard
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
