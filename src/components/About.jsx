import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Section title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">
            Studio Philosophy
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-nimph-text/80 leading-relaxed">
            <p>
              Nimph Ventures is a{' '}
              <span className="text-nimph-accent font-medium">founder-led</span> startup
              studio building B2B SaaS products that solve real, painful problems.
            </p>

            <p>
              We believe in putting{' '}
              <span className="text-nimph-accent font-medium">customers first</span> —
              shipping fast, iterating with real user feedback, and building products
              that people actually pay for from day one.
            </p>

            <p className="text-nimph-gray">
              No vanity metrics. No solutions looking for problems.{' '}
              <span className="text-nimph-text">Just focused execution</span> on
              products that create measurable value for businesses.
            </p>
          </div>

          {/* Key principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          >
            <div className="bg-nimph-surface rounded-xl p-6 sm:p-8 border border-nimph-accent/10">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-3">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Founder Led</h3>
              <p className="text-sm sm:text-base text-nimph-gray">
                Direct ownership and accountability from ideation to execution
              </p>
            </div>

            <div className="bg-nimph-surface rounded-xl p-6 sm:p-8 border border-nimph-accent/10">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-3">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-sm sm:text-base text-nimph-gray">
                Real problems, real customers, real revenue — validation before scale
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
