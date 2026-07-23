import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    value: '5',
    label: 'Products',
    sublabel: 'Live & in development',
  },
  {
    value: '3',
    label: 'Markets',
    sublabel: 'FinTech, Construction, Distribution',
  },
  {
    value: '7',
    label: 'Locations',
    sublabel: 'Multi-state operations',
  },
  {
    value: '1,400+',
    label: 'Daily Interactions',
    sublabel: 'Orders & customer touchpoints',
  },
]

const Traction = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Stats container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-nimph-surface rounded-2xl p-8 sm:p-12 border border-nimph-accent/10"
        >
          {/* Optional header */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-nimph-text/70 tracking-tight">
              Traction
            </h3>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2 tabular-nums tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-semibold text-nimph-text mb-1">
                  {stat.label}
                </div>

                {/* Sublabel */}
                <div className="text-xs sm:text-sm text-nimph-gray">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Traction
