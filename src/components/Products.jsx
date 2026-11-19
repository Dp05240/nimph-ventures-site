import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { trackProductClick } from '../utils/analytics'
import {
  STAT_DRAFSENSE_CHECKS,
  STAT_DRAFSENSE_PAYERS,
  STAT_DRAFSENSE_VALUE_DETAIL,
  STAT_DRAFSENSE_PK_CHECKS,
  STAT_WEBCHAT_CUSTOMERS,
  STAT_WEBCHAT_REGULAR,
  STAT_WEBCHAT_REVENUE,
  STAT_WEBCHAT_ORDERS,
  STAT_WEBCHAT_PRODUCTS,
  STAT_WEBCHAT_LOCATIONS,
  STAT_ORDERRUNNER_RUNS,
  STAT_ORDERRUNNER_TOTAL,
  STAT_ORDERRUNNER_AUTO,
  STAT_DISTGRID_LINES,
  STAT_DISTGRID_TESTS,
} from '../constants'

const products = [
  {
    name: 'Drafsense',
    description: 'Remotely created check drafting',
    detail: 'Draft checks from payer authorizations, with encryption and verification built in.',
    bullets: [
      `${STAT_DRAFSENSE_CHECKS} checks printed for ${STAT_DRAFSENSE_PAYERS} payers; ${STAT_DRAFSENSE_VALUE_DETAIL} in check value at Price King (${STAT_DRAFSENSE_PK_CHECKS} checks)`,
      'Google Cloud KMS encryption, 2FA, business verification, payer authorizations',
      'Next.js, TypeScript, and Postgres with row-level security on all 28 tables',
    ],
    status: 'Live · In production',
    statusColor: 'text-green-400',
    url: 'https://drafsense.com',
    urlLabel: 'drafsense.com',
  },
  {
    name: 'PSM WebCat',
    description: 'B2B ordering for distributors',
    detail: `A multi-tenant, multi-location B2B catalog and ordering platform for a distributor's existing and new business customers. It replaced DeskSpace, a single-location catalog that other locations asked to use.`,
    bullets: [
      `${STAT_WEBCHAT_CUSTOMERS} business customers, ${STAT_WEBCHAT_REGULAR} of them regular`,
      `${STAT_WEBCHAT_REVENUE} revenue increase`,
      `Launched Oct 1, 2026 with ${STAT_WEBCHAT_ORDERS} orders in six weeks, about 13 a day, and orders every day since launch`,
      'Customers see new products with images, restocking data, and sales trends showing what other businesses are buying',
      'Starting November 16, 2026: closed ordering, where every customer gets their own account (set up by a sales rep after business verification), with supervised ordering for chain stores',
      `${STAT_WEBCHAT_PRODUCTS} products; ${STAT_WEBCHAT_LOCATIONS} distributor locations configured`,
    ],
    status: 'Live · Private',
    statusColor: 'text-purple-400',
    url: null,
    urlLabel: 'Private Access',
  },
  {
    name: 'OrderRunner',
    description: 'ERP order entry with no API',
    detail: 'An agent that enters customer orders into a legacy ERP through the browser.',
    bullets: [
      `${STAT_ORDERRUNNER_RUNS} of ${STAT_ORDERRUNNER_TOTAL} runs completed; ${STAT_ORDERRUNNER_AUTO} of order lines added automatically`,
      'A person reviews and submits every order',
      'The same approach automates stock sync, price updates, and product creation',
    ],
    status: 'Live · In use',
    statusColor: 'text-green-400',
    url: null,
    urlLabel: null,
  },
  {
    name: 'DistGrid',
    description: 'Multi-location ERP (in development)',
    detail: null,
    bullets: [
      `${STAT_DISTGRID_LINES} lines of TypeScript and React, ${STAT_DISTGRID_TESTS} passing automated tests`,
      '7 locations on one shared product catalog; offline-capable PWA syncing 22 tables',
    ],
    status: 'In development',
    statusColor: 'text-yellow-400',
    url: null,
    urlLabel: null,
  },
  {
    name: 'CARW26',
    description: 'Car wash booking and rewards (in development)',
    detail: null,
    bullets: [
      'Built and deployed in a day: 2 locations, 14 lanes, public booking site, points-based rewards',
    ],
    status: 'In development',
    statusColor: 'text-yellow-400',
    url: null,
    urlLabel: null,
  },
  {
    name: 'ProMark Works',
    description: 'Digital inspection and warranty management platform',
    detail: 'Replacing paper clipboards for residential home builders — connecting the office, the inspector in the field, and the contractor in one workflow.',
    bullets: [],
    status: 'Beta · Live',
    statusColor: 'text-blue-400',
    badge: 'Seeking first design partner',
    url: 'https://app.promarkworks.com/',
    urlLabel: 'Check Out',
  },
]

const sideProjects = [
  {
    name: 'SafeVoice',
    description: 'Anonymous school safety reporting platform, with a proposal, interactive demo, and patent landscape analysis.',
    url: null,
  },
  {
    name: 'AV+P',
    description: 'Live events production operations software.',
    url: 'https://avpluspro.netlify.app/dashboard.html',
  },
  {
    name: 'Eventcode',
    description: 'Event-production operations platform with Figma prototypes.',
    url: null,
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
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-nimph-surface rounded-xl p-6 sm:p-8 transition-smooth hover:bg-nimph-surface/80 hover:shadow-2xl hover:shadow-nimph-accent/10 hover:-translate-y-1 flex flex-col"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-nimph-accent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs sm:text-sm font-medium ${product.statusColor} flex items-center gap-2`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" aria-hidden="true" />
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
      {product.detail && (
        <p className="text-sm sm:text-base text-nimph-gray mb-4 leading-relaxed">
          {product.detail}
        </p>
      )}

      {/* Bullets */}
      {product.bullets && product.bullets.length > 0 && (
        <ul className="space-y-2 mb-6 flex-1" aria-label={`${product.name} details`}>
          {product.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-nimph-gray">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nimph-accent flex-shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Optional badge pill (ProMark Works) */}
      {product.badge && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-nimph-accent/10 text-nimph-accent text-xs sm:text-sm rounded-full border border-nimph-accent/20">
            {product.badge}
          </span>
        </div>
      )}

      {/* CTA */}
      {product.url ? (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductClick(product.name, product.url)}
          className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-nimph-accent/10 text-nimph-accent rounded-lg border border-nimph-accent/20 hover:bg-nimph-accent hover:text-white transition-smooth font-medium text-sm w-fit"
        >
          <span>{product.urlLabel}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      ) : product.urlLabel ? (
        <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-nimph-surface border border-nimph-text/10 text-nimph-gray rounded-lg text-sm font-medium cursor-not-allowed w-fit">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
      ) : null}

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-nimph-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
    </motion.div>
  )
}

const SideProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    className="bg-nimph-surface/50 rounded-xl p-5 border border-nimph-accent/10 hover:border-nimph-accent/20 transition-smooth"
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs px-2 py-0.5 rounded-full bg-nimph-accent/10 text-nimph-accent border border-nimph-accent/20 font-medium">
        Prototyped
      </span>
    </div>
    <h4 className="text-base sm:text-lg font-bold mb-1 text-nimph-text">
      {project.name}
    </h4>
    <p className="text-sm text-nimph-gray leading-relaxed">
      {project.description}
    </p>
    {project.url && (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackProductClick(project.name, project.url)}
        className="mt-3 inline-flex items-center gap-1 text-nimph-accent text-sm hover:text-nimph-accent-light transition-smooth"
      >
        View
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )}
  </motion.div>
)

const Products = () => {
  return (
    <section id="products" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
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
            Products
          </h2>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        {/* Side projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-nimph-text/80">
            Side projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sideProjects.map((project, index) => (
              <SideProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
