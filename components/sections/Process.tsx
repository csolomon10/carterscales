'use client'

import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '@/lib/animations'

const steps = [
  {
    number: '01',
    title: 'Audit Your Current Online Presence',
    description:
      'We review your website, ads, social profiles, and booking flow to understand exactly where things stand before making any recommendations.',
  },
  {
    number: '02',
    title: 'Analyze Competitors & Market Positioning',
    description:
      'We map out who you\'re competing with locally, what they\'re running, and where clear opportunities exist for you to stand out.',
  },
  {
    number: '03',
    title: 'Identify Where Leads Are Being Lost',
    description:
      'Most clinics leak leads at specific, fixable points. We find them, whether it\'s ad targeting, landing pages, follow-up speed, or booking friction.',
  },
  {
    number: '04',
    title: 'Build a Tailored AI-Powered Growth Plan',
    description:
      'We put together a clear, prioritized growth plan based on your clinic\'s specific situation, not a generic template.',
  },
  {
    number: '05',
    title: 'Launch Campaigns, Systems & Optimizations',
    description:
      'We execute. Ads go live, automation gets connected, and conversion improvements roll out in a structured sequence.',
  },
  {
    number: '06',
    title: 'Track Performance & Improve Continuously',
    description:
      'Every campaign and system is monitored. What\'s working gets scaled. What isn\'t gets fixed. No set-and-forget.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <p className="section-tag justify-center">How It Works</p>
          <h2 className="section-heading mb-5">
            Six Steps From Audit
            <br />
            to Growing Clinic
          </h2>
          <p className="section-sub mx-auto text-center">
            A clear, structured process, not guesswork. Here&apos;s exactly how we go from understanding your
            current situation to building systems that fill your appointment calendar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div className="absolute left-[39px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-[#1f1f1f] to-transparent hidden lg:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-5"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeLeft}
                className="group relative flex items-start gap-8 p-7 rounded-2xl bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#00e67a]/20 hover:bg-[#0f0f0f] transition-all duration-300"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-[60px] flex flex-col items-center">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#0f0f0f] border border-[#2a2a2a] group-hover:border-[#00e67a]/30 flex items-center justify-center transition-colors duration-300">
                    <span className="text-[#00e67a] font-bold text-sm font-mono">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{step.description}</p>
                </div>

                {/* Step connector arrow — hidden on last */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-3.5 left-[47px] w-5 h-5 flex items-center justify-center z-10 hidden lg:flex">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
