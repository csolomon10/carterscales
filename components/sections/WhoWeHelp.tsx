'use client'

import { motion } from 'framer-motion'
import { Heart, User, Scissors, Star, Activity, Zap, Sun, Sparkles } from 'lucide-react'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

const clinics = [
  {
    icon: Heart,
    title: 'Med Spas',
    description: 'Botox, fillers, body contouring, and wellness services.',
  },
  {
    icon: User,
    title: "Men's Aesthetic Clinics",
    description: 'Treatments tailored to the growing male aesthetics market.',
  },
  {
    icon: Scissors,
    title: 'Hair Restoration Clinics',
    description: 'PRP, transplants, and scalp treatment providers.',
  },
  {
    icon: Star,
    title: 'Plastic Surgery Clinics',
    description: 'Surgical and non-surgical cosmetic procedure providers.',
  },
  {
    icon: Activity,
    title: 'Wellness Clinics',
    description: 'IV therapy, hormone optimization, and longevity services.',
  },
  {
    icon: Zap,
    title: 'Laser Clinics',
    description: 'Laser hair removal, skin resurfacing, and body treatments.',
  },
  {
    icon: Sun,
    title: 'Skin Clinics',
    description: 'Facials, peels, acne treatment, and anti-aging services.',
  },
  {
    icon: Sparkles,
    title: 'Appearance Improvement Brands',
    description: 'Any business helping people look and feel their best.',
  },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-28 md:py-36 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e67a]/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center">Who We Work With</p>
          <h2 className="section-heading mb-5">
            Built for Appearance-Improvement Businesses
          </h2>
          <p className="section-sub mx-auto text-center">
            We don&apos;t work with every type of business. We specialize in aesthetic clinics and
            appearance-improvement brands — because deep niche focus produces better results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {clinics.map((clinic) => {
            const Icon = clinic.icon
            return (
              <motion.div
                key={clinic.title}
                variants={scaleIn}
                className="card-base group p-6 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00e67a]/10 border border-[#00e67a]/20 flex items-center justify-center mb-4 group-hover:bg-[#00e67a]/15 transition-colors duration-300">
                  <Icon className="w-4.5 h-4.5 text-[#00e67a]" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{clinic.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{clinic.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          If your business helps people improve how they look — we can help you grow it.
        </motion.p>
      </div>
    </section>
  )
}
