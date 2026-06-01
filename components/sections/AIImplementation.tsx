'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Target, MessageSquare, BarChart2, Search, Palette, ArrowRight } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn } from '@/lib/animations'

const aiCapabilities = [
  {
    icon: Target,
    title: 'Smarter Ad Targeting',
    description: 'AI tools identify higher-converting audiences faster than manual testing alone.',
  },
  {
    icon: MessageSquare,
    title: 'Faster Follow-Up',
    description: 'Automated sequences reach leads within minutes, before they call a competitor.',
  },
  {
    icon: Search,
    title: 'Competitor Intelligence',
    description: 'Monitor what competitors are running and identify positioning gaps instantly.',
  },
  {
    icon: Palette,
    title: 'Creative Testing',
    description: 'Test more angles in less time. Know what resonates before wasting budget.',
  },
  {
    icon: BarChart2,
    title: 'Ad Strategy Optimization',
    description: 'Continuous performance analysis without the manual spreadsheet hours.',
  },
  {
    icon: Zap,
    title: 'Lead Conversion',
    description: 'AI-assisted workflows turn more inquiries into confirmed bookings.',
  },
]

export default function AIImplementation() {
  return (
    <section id="ai-implementation" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00e67a]/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e67a]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-tag">AI Implementation</p>
            <h2 className="section-heading mb-6">
              AI Is Changing Marketing.
              <br />
              <span className="text-gradient">Your Clinic Shouldn&apos;t Be Behind.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Most aesthetic clinics are still running ads the way they did five years ago: same
              creatives, same targeting, same manual follow-up. Meanwhile, the clinics that adapt
              are pulling ahead.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              CarterScales integrates AI tools across every stage of your marketing, from identifying
              audiences to following up with leads. The goal isn&apos;t to replace the human side of
              your clinic. It&apos;s to make the marketing system faster, smarter, and more profitable.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* Visual card */}
            <div className="relative bg-[#0c0c0c] border border-[#1f1f1f] rounded-2xl p-8 overflow-hidden">
              {/* Inner glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00e67a]/[0.06] rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#00e67a]/10 border border-[#00e67a]/25 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#00e67a]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Growth System</p>
                    <p className="text-gray-500 text-xs">Active across all channels</p>
                  </div>
                  {/* Status indicator */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#00e67a] animate-pulse" />
                    <span className="text-[#00e67a] text-xs font-medium">Live</span>
                  </div>
                </div>

                {/* Process flow */}
                {[
                  { step: '01', label: 'Audience Intelligence', status: 'Optimizing' },
                  { step: '02', label: 'Ad Creative Testing', status: 'Running' },
                  { step: '03', label: 'Lead Follow-Up', status: 'Automated' },
                  { step: '04', label: 'Booking Conversion', status: 'Tracking' },
                ].map((item, i) => (
                  <div
                    key={item.step}
                    className={`flex items-center justify-between py-3 ${
                      i < 3 ? 'border-b border-[#1a1a1a]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#00e67a]/40 text-xs font-mono">{item.step}</span>
                      <span className="text-white/80 text-sm">{item.label}</span>
                    </div>
                    <span className="text-xs text-[#00e67a]/70 font-medium bg-[#00e67a]/8 px-2.5 py-1 rounded-full border border-[#00e67a]/15">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {aiCapabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                variants={scaleIn}
                className="card-base group p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00e67a]/8 border border-[#00e67a]/15 flex items-center justify-center group-hover:bg-[#00e67a]/12 transition-colors duration-300">
                  <Icon className="w-3.5 h-3.5 text-[#00e67a]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{cap.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* REPLACE: Update with your actual Calendly booking link */}
          <a
            href="https://calendly.com/cartersolomon1128/get-your-free-growth-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00e67a] text-sm font-medium hover:gap-3 transition-all duration-200"
          >
            See how AI fits your clinic&apos;s marketing
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
