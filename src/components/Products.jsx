import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { trackProductClick } from '../utils/analytics'

const products = [
  {
    name: 'Drafsense',
    description: 'RCC check-drafting SaaS for businesses',
    detail: 'Secure, compliant payment platform with bank-grade encryption and verified merchants. Streamlining business payments with real-time check processing.',
    status: 'Live · In production',
    statusColor: 'text-green-400',
    badge: 'Bank-reviewed · Real checks clearing',
    tech: ['FinTech', 'Security', 'Compliance'],
    url: 'https://drafsense.com',
    urlLabel: 'Check Out',
  },
  {
    name: 'ProMark Works',
    description: 'Digital inspection and warranty management platform',
    detail: 'Replacing paper clipboards for residential home builders — connecting the office, the inspector in the field, and the contractor in one workflow.',
    status: 'Beta · Live',
    statusColor: 'text-blue-400',
    badge: 'Seeking first design partner', // Changed from "Active user interviews underway"
    tech: ['Construction Tech', 'Mobile', 'Workflow'],
    url: 'https://app.promarkworks.com/',
    urlLabel: 'Check Out',
  },
  {
    name: 'WebCat ERP',
    description: 'B2B catalog and ordering platform for distributors',
    detail: 'Multi-tenant enterprise resource planning system powering distribution operations across the East Coast.',
    status: 'Private · Live',
    statusColor: 'text-purple-400',
    badge: '<!-- CONFIRM: real current daily order count and customer count -->', // Placeholder until confirmed
    tech: ['ERP', 'B2B', 'Multi-tenant'],
    url: null,
    urlLabel: 'Private Access',
  },
  {
    name: 'Ordex',
    description: 'Commercial distribution platform',
    detail: 'Enterprise-ready, sellable version of WebCat ERP — built for scale and designed for the broader distribution market.',
    status: 'Testing Beta',
    statusColor: 'text-yellow-400',
    badge: 'Commercial launch in progress',
    tech: ['SaaS', 'Distribution', 'Enterprise'],
    url: 'https://ordex.nimphstudios.com/admin/login',
    urlLabel: 'Check Out',
  },
  {
    name: 'AV+P',
    description: 'Early-stage B2B solution',
    detail: 'Exploring opportunities in vertical B2B workflows with a focus on operational efficiency and customer experience.',
    status: 'Prototyping',
    statusColor: 'text-gray-400',
    badge: 'Early stage development',
    tech: ['Prototype', 'B2B', 'Automation'],
    url: 'https://avpluspro.netlify.app/dashboard.html',
    urlLabel: 'Check Out',
  },
]

const ProductCard = ({ product, index }) => {
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
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-nimph-surface rounded-xl p-6 sm:p-8 transition-smooth hover:bg-nimph-surface/80 hover:shadow-2xl hover:shadow-nimph-accent/10 hover:-translate-y-1"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-nimph-accent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs sm:text-sm font-medium ${product.statusColor} flex items-center gap-2`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          {product.status}
        </span>
      </div>

      {/* Product name */}
      <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight group-hover:text-gradient transition-smooth">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-nimph-text/80 mb-4 font-light">
        {product.description}
      </p>

      {/* Detail */}
      <p className="text-sm sm:text-base text-nimph-gray mb-6 leading-relaxed">
        {product.detail}
      </p>

      {/* Badge */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-nimph-accent/10 text-nimph-accent text-xs sm:text-sm rounded-full border border-nimph-accent/20">
          {product.badge}
        </span>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.tech.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-nimph-dark/50 text-nimph-text/60 text-xs rounded border border-nimph-text/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      {product.url ? (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductClick(product.name, product.url)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-nimph-accent/10 text-nimph-accent rounded-lg border border-nimph-accent/20 hover:bg-nimph-accent hover:text-white transition-smooth font-medium text-sm"
        >
          <span>{product.urlLabel}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      ) : (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-nimph-surface border border-nimph-text/10 text-nimph-gray rounded-lg text-sm font-medium cursor-not-allowed">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>{product.urlLabel}</span>
        </div>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-nimph-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
    </motion.div>
  )
}

const Products = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Product Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-nimph-gray max-w-2xl mx-auto">
            Five focused products solving real problems for real businesses
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
