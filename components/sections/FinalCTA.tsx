'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export default function FinalCTA() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00e67a]/[0.05] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f0f0f] border border-[#00e67a]/20 text-[#00e67a] text-xs font-semibold tracking-wide mb-8"
        >
          <Zap className="w-3 h-3 fill-current" />
          Free. No Obligation. No Pitch Deck.
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          Ready To Bring Your Clinic
          <br />
          <span className="text-gradient">Into the New Era of Marketing?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Book a free AI Growth Audit and see where your clinic is losing leads, wasting ad spend,
          or missing growth opportunities. You&apos;ll walk away with a clear picture — regardless
          of whether we work together.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* REPLACE: Update with your actual Calendly booking link */}
          <a
            href="https://calendly.com/cartersolomon1128/get-your-free-growth-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-[#00e67a] text-black font-bold rounded-xl hover:bg-[#00ff88] transition-all duration-200 shadow-[0_0_40px_rgba(0,230,122,0.35)] hover:shadow-[0_0_60px_rgba(0,230,122,0.55)] text-base"
          >
            Book a Free AI Growth Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.32 }}
          className="text-gray-600 text-sm mt-6"
        >
          Typically a 30-minute call. No hard sell.
        </motion.p>
      </div>
    </section>
  )
}
