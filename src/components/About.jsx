import React from 'react'
import { motion } from 'framer-motion'

const bullets = [
  'U.S. merchant wholesalers had $11.4 trillion in sales in 2022 (Census Bureau, Annual Wholesale Trade Survey).',
  'Business checks declined 4.0% a year by number from 2018 to 2021, less than half the 9.3% annual decline for consumer checks (Federal Reserve Payments Study).',
  'Price King\'s ERP has no API, so ordering, stock, and price updates had to be keyed in by hand. Nimph Ventures builds apps and agents around that gap.',
]

const sources = [
  {
    label: 'Census Bureau — Annual Wholesale Trade Survey',
    url: 'https://www.census.gov/newsroom/press-releases/2024/annual-wholesale-trade-survey.html',
  },
  {
    label: 'Federal Reserve Payments Study',
    url: 'https://www.federalreserve.gov/paymentsystems/frps-dfips-cy-2021.htm',
  },
]

const About = () => {
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
            Market and Opportunity
          </h2>

          {/* Bullets */}
          <ul className="space-y-5 mb-10">
            {bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
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
                  {bullet}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-nimph-accent/10 pt-6"
          >
            <p className="text-xs text-nimph-gray uppercase tracking-wider mb-3 font-medium">Sources</p>
            <ul className="space-y-2">
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-nimph-accent hover:text-nimph-accent-light transition-smooth break-all"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
