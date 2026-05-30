'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        {/* Primary glow orb — center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[#00e67a]/[0.04] rounded-full blur-[140px] pointer-events-none" />
        {/* Secondary glow — top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00e67a]/[0.03] rounded-full blur-[100px] pointer-events-none" />
        {/* Fade to black at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f0f0f] border border-[#00e67a]/20 text-[#00e67a] text-xs font-semibold tracking-wide mb-8"
        >
          <Zap className="w-3 h-3 fill-current" />
          AI-Powered Growth for Aesthetic Clinics
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.06] mb-6"
        >
          Stop Advertising Like
          <br />
          <span className="text-gradient">It&apos;s Still 2010.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-5"
        >
          CarterScales helps aesthetic clinics and appearance-improvement businesses get more booked consultations using AI-powered ads, smarter follow-up systems, conversion-focused websites, and tailored growth strategies.
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.28 }}
          className="text-sm text-gray-500 max-w-xl mx-auto mb-11 leading-relaxed"
        >
          Custom growth systems built around what your clinic actually needs — so you&apos;re not paying for services that don&apos;t move the needle.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.36 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* REPLACE: Update with your actual Calendly booking link */}
          <a
            href="https://calendly.com/carterscales/audit"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#00e67a] text-black font-bold rounded-xl hover:bg-[#00ff88] transition-all duration-200 shadow-[0_0_30px_rgba(0,230,122,0.3)] hover:shadow-[0_0_50px_rgba(0,230,122,0.5)] text-base"
          >
            Book a Free AI Growth Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#who-we-help"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#2a2a2a] text-white font-medium rounded-xl hover:border-[#00e67a]/30 hover:bg-[#0f0f0f] transition-all duration-200 text-base"
          >
            See How We Help Clinics Scale
          </a>
        </motion.div>

        {/* Value props bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-10 border-t border-[#1a1a1a]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: 'Aesthetics Only', label: 'Niche Focus' },
              { value: 'AI-Powered', label: 'Marketing Systems' },
              { value: 'Booked Consults', label: 'The Only Metric That Matters' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-[#00e67a] font-bold text-base">{item.value}</span>
                <span className="text-gray-600 text-xs tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
