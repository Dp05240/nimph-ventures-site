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
            How I Work
          </h2>

          {/* Main body copy */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-nimph-text/80 leading-relaxed text-left">
            <p>
              I run technology and operations for a multi-location wholesale distribution business by day, and architect production B2B software by night. Every product here started the same way: a real operational problem I hit myself, not a market I researched from the outside.
            </p>

            <p>
              I don't write every line of code. I design the system — schema, auth model, data flow — then direct the build with Claude and Cursor, and review it the way a fintech team would: adversarial audits before launch, known gaps documented instead of hidden.
            </p>

            <p className="text-nimph-gray">
              <span className="text-nimph-text font-medium">If you're evaluating me for a role:</span> this is what hands-on, AI-directed system ownership looks like in production — not on a whiteboard.
            </p>
            
            <p className="text-nimph-gray">
              <span className="text-nimph-text font-medium">If you're a distributor buried in phone orders and spreadsheets:</span> this is software built by someone who's operated inside your problem, not guessed at it from outside.
            </p>
          </div>

          {/* Credibility bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-16 grid grid-cols-1 gap-6"
          >
            <div className="bg-nimph-surface rounded-xl p-6 sm:p-8 border border-nimph-accent/10 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-nimph-accent mt-2"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-nimph-text">
                    Architect & direct
                  </h3>
                  <p className="text-sm sm:text-base text-nimph-gray">
                    Own the system design and data model, then direct AI-assisted execution with adversarial review before anything ships
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-nimph-surface rounded-xl p-6 sm:p-8 border border-nimph-accent/10 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-nimph-accent mt-2"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-nimph-text">
                    Domain-first
                  </h3>
                  <p className="text-sm sm:text-base text-nimph-gray">
                    Every product traces to a real problem operated inside, never market research
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-nimph-surface rounded-xl p-6 sm:p-8 border border-nimph-accent/10 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-nimph-accent mt-2"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-nimph-text">
                    Security-serious
                  </h3>
                  <p className="text-sm sm:text-base text-nimph-gray">
                    Encrypted at rest, externally audited, gaps documented rather than hidden
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
