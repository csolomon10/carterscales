'use client'

import { motion } from 'framer-motion'
import { ArrowRight, AlertCircle } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, stagger } from '@/lib/animations'

const auditPoints = [
  {
    title: 'Website Conversion Leaks',
    description:
      'Most clinic websites are built to look good, not convert. We identify the exact points where visitors stop and leave.',
  },
  {
    title: 'Weak Calls-to-Action',
    description:
      '"Learn more" isn\'t a CTA. We audit every prompt on your site and ads to make sure they\'re directing people toward booking.',
  },
  {
    title: 'Missed Retargeting Opportunities',
    description:
      'The majority of clinics never retarget warm audiences. We check whether you\'re leaving warm traffic on the table.',
  },
  {
    title: 'Poor Follow-Up Speed',
    description:
      'A lead who doesn\'t hear back within minutes will call a competitor. We assess your current response time and system.',
  },
  {
    title: 'Competitor Positioning Gaps',
    description:
      'We review what competitors in your market are doing and identify where you can differentiate your offer.',
  },
  {
    title: 'Lead Form Friction',
    description:
      'Long or confusing forms kill conversions. We review how many steps it takes someone to go from interested to booked.',
  },
  {
    title: 'Ad Creative Opportunities',
    description:
      'We look at your current ad angles, creative formats, and messaging to spot what\'s being left untested.',
  },
]

export default function AuditSection() {
  return (
    <section id="audit" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e67a]/[0.025] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + CTA */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-tag">Free Audit Breakdown</p>
            <h2 className="section-heading mb-6">
              What We Look For In
              <br />
              <span className="text-gradient">Your Free Audit</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              The free AI Growth Audit isn&apos;t a generic checklist call. We go through your
              actual online presence — ads, website, follow-up systems, and competitive landscape —
              and identify exactly where you&apos;re losing leads and wasting budget.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              You walk away knowing the specific problems and how to fix them — whether you work
              with us or not.
            </p>

            {/* REPLACE: Update with your actual Calendly booking link */}
            <a
              href="https://calendly.com/carterscales/audit"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00e67a] text-black font-bold rounded-xl hover:bg-[#00ff88] transition-all duration-200 shadow-[0_0_25px_rgba(0,230,122,0.3)] hover:shadow-[0_0_40px_rgba(0,230,122,0.45)] text-sm"
            >
              Book Your Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Right: Audit points */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {auditPoints.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeRight}
                className="group bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#00e67a]/20 hover:bg-[#0f0f0f] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-[#00e67a]/8 border border-[#00e67a]/15 flex items-center justify-center">
                    <span className="text-[#00e67a] text-xs font-bold font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{point.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
