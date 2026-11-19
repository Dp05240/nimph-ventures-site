import React from 'react'
import { motion } from 'framer-motion'
import {
  STAT_DRAFSENSE_CHECKS,
  STAT_DRAFSENSE_VALUE,
  STAT_WEBCHAT_CUSTOMERS,
  STAT_WEBCHAT_REVENUE,
  STAT_ORDERRUNNER_RUNS,
  STAT_ORDERRUNNER_TOTAL,
} from '../constants'

const stats = [
  {
    value: STAT_DRAFSENSE_CHECKS,
    label: 'checks printed',
    sublabel: `including ${STAT_DRAFSENSE_VALUE} at Price King · Drafsense`,
  },
  {
    value: STAT_WEBCHAT_CUSTOMERS,
    label: 'business customers',
    sublabel: `${STAT_WEBCHAT_REVENUE} revenue increase · PSM WebCat`,
  },
  {
    value: `${STAT_ORDERRUNNER_RUNS}/${STAT_ORDERRUNNER_TOTAL}`,
    label: 'ERP order runs',
    sublabel: 'completed automatically · OrderRunner',
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
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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
