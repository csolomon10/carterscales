'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

const packages = [
  {
    name: 'Ads Only',
    tagline: 'For clinics with a working website that need better campaigns.',
    includes: [
      'Meta ads strategy and campaign build',
      'Audience research and targeting',
      'Creative strategy and direction',
      'Campaign optimization and reporting',
    ],
    highlight: false,
  },
  {
    name: 'Website + Conversion Fixes',
    tagline: 'For clinics losing visitors who never book.',
    includes: [
      'Website conversion audit',
      'CTA and UX improvements',
      'Landing page optimization',
      'Booking flow friction removal',
    ],
    highlight: false,
  },
  {
    name: 'AI Follow-Up System',
    tagline: 'For clinics with leads that go cold before booking.',
    includes: [
      'CRM and automation setup',
      'Lead response sequences',
      'AI-assisted follow-up workflows',
      'Booking confirmation systems',
    ],
    highlight: false,
  },
  {
    name: 'Full Growth System',
    tagline: 'Ads, website, follow-up, and strategy — all connected.',
    includes: [
      'Everything in all packages',
      'Unified growth strategy',
      'Competitor intelligence',
      'Offer positioning and creative',
      'Monthly performance reviews',
    ],
    highlight: true,
  },
  {
    name: 'Custom Clinic Package',
    tagline: 'Built around your specific gaps and goals.',
    includes: [
      'Discovery call to assess your situation',
      'Tailored scope based on what you actually need',
      'Priced to match your budget and goals',
      'No services you don\'t need',
    ],
    highlight: false,
  },
]

export default function TailoredPackages() {
  return (
    <section id="packages" className="py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-6"
        >
          <p className="section-tag justify-center">Tailored Packages</p>
          <h2 className="section-heading mb-5">
            Only Pay For What You
            <br />
            <span className="text-gradient">Actually Need.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-sub text-center mx-auto mb-16"
        >
          Every clinic is different. Some need better ads. Some need better follow-up. Some need a
          better website. Some need the full system. CarterScales builds a package tailored to your
          current gaps, goals, and budget.
        </motion.p>

        {/* Package cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={scaleIn}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-[#0c1a12] border-2 border-[#00e67a]/35 shadow-[0_0_40px_rgba(0,230,122,0.12)]'
                  : 'bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#00e67a]/20 hover:bg-[#0f0f0f]'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00e67a] text-black text-xs font-bold rounded-full tracking-wide">
                  Most Complete
                </div>
              )}

              <div className="mb-5">
                <h3 className={`font-bold text-lg mb-2 ${pkg.highlight ? 'text-[#00e67a]' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pkg.tagline}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                      pkg.highlight ? 'bg-[#00e67a]/15' : 'bg-[#1a1a1a]'
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${pkg.highlight ? 'text-[#00e67a]' : 'text-gray-400'}`} strokeWidth={3} />
                    </div>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* REPLACE: Update with your actual Calendly booking link */}
              <a
                href="https://calendly.com/cartersolomon1128/get-your-free-growth-audit"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-[#00e67a] text-black hover:bg-[#00ff88] shadow-[0_0_25px_rgba(0,230,122,0.3)] hover:shadow-[0_0_40px_rgba(0,230,122,0.45)]'
                    : 'bg-[#141414] border border-[#2a2a2a] text-white hover:border-[#00e67a]/30 hover:bg-[#181818]'
                }`}
              >
                Book a Free Audit
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          Not sure which fits? The free audit tells you exactly where to start.
        </motion.p>
      </div>
    </section>
  )
}
