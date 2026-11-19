import React from 'react'
import { motion } from 'framer-motion'

const pricing = [
  {
    name: 'WebCat',
    description: 'white-label ordering for distributors, planned at $99 to $499 per distributor per month.',
  },
  {
    name: 'Drafsense',
    description: 'tiered per-check pricing.',
  },
  {
    name: 'DistGrid',
    description: 'an ERP for the same distributors (in development).',
  },
]

const tableRows = [
  { distributors: '25', arr99: '$29,700', arr499: '$149,700' },
  { distributors: '100', arr99: '$118,800', arr499: '$598,800' },
]

const Model = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 tracking-tight text-center">
            Business model and targets
          </h2>

          {/* Pricing bullets */}
          <ul className="space-y-4 mb-10">
            {pricing.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4"
              >
                <span
                  className="mt-2 w-2 h-2 rounded-full bg-nimph-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-base sm:text-lg text-nimph-text/80 leading-relaxed">
                  <span className="font-semibold text-nimph-text">{item.name}:</span>{' '}
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-nimph-surface rounded-xl border border-nimph-accent/10 overflow-hidden"
          >
            {/* Table label */}
            <div className="px-5 sm:px-6 pt-5 pb-3 border-b border-nimph-accent/10">
              <p className="text-sm text-nimph-gray italic">
                Targets, not results. Annual recurring revenue if WebCat reaches this many distributors:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-nimph-dark/40">
                    <th scope="col" className="px-5 sm:px-6 py-3 text-left font-semibold text-nimph-text/90 whitespace-nowrap">
                      Distributors on WebCat
                    </th>
                    <th scope="col" className="px-5 sm:px-6 py-3 text-right font-semibold text-nimph-text/90 whitespace-nowrap">
                      ARR at $99/month
                    </th>
                    <th scope="col" className="px-5 sm:px-6 py-3 text-right font-semibold text-nimph-text/90 whitespace-nowrap">
                      ARR at $499/month
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={row.distributors}
                      className={i % 2 === 0 ? 'bg-nimph-surface' : 'bg-nimph-dark/20'}
                    >
                      <td className="px-5 sm:px-6 py-4 text-nimph-text/80 tabular-nums">
                        {row.distributors}
                      </td>
                      <td className="px-5 sm:px-6 py-4 text-right text-nimph-text/80 tabular-nums">
                        {row.arr99}
                      </td>
                      <td className="px-5 sm:px-6 py-4 text-right text-nimph-text/80 tabular-nums">
                        {row.arr499}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Model
