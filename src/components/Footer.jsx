import React from 'react'
import { motion } from 'framer-motion'
import { trackCTAClick } from '../utils/analytics'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-nimph-surface relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* CTA section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-nimph-gray mb-8 sm:mb-10 max-w-2xl mx-auto">
              Building something interesting? Want to partner or learn more about our
              products?
            </p>

            {/* Contact methods */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Email 1 */}
              <motion.a
                href="mailto:dhaval@nimphventures.com"
                onClick={() => trackCTAClick('Email - Nimph Ventures', 'dhaval@nimphventures.com')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-nimph-accent text-white rounded-lg font-medium transition-smooth hover:bg-nimph-accent-light hover:shadow-lg hover:shadow-nimph-accent/30 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">dhaval@nimphventures.com</span>
                <span className="sm:hidden">Nimph Email</span>
              </motion.a>

              {/* Email 2 */}
              <motion.a
                href="mailto:dhaval@drafsense.com"
                onClick={() => trackCTAClick('Email - Drafsense', 'dhaval@drafsense.com')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-nimph-surface text-nimph-text rounded-lg font-medium border border-nimph-accent/20 transition-smooth hover:border-nimph-accent hover:shadow-lg hover:shadow-nimph-accent/20 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">dhaval@drafsense.com</span>
                <span className="sm:hidden">Drafsense Email</span>
              </motion.a>
            </div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <a
                href="https://linkedin.com/in/dhavalpatel27"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('LinkedIn', 'dhavalpatel27')}
                className="inline-flex items-center gap-2 text-nimph-gray hover:text-nimph-accent transition-smooth text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>linkedin.com/in/dhavalpatel27</span>
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-nimph-accent/20 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-nimph-gray">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-nimph-text">
                Nimph<span className="text-nimph-accent">.</span>
              </span>
              <span className="text-nimph-gray/50">|</span>
              <span className="text-nimph-gray">Ventures LLC</span>
            </div>

            <div className="text-center sm:text-right">
              <p>© {currentYear} Nimph Ventures LLC. Building the future of B2B SaaS.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
