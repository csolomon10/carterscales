'use client'

import { motion } from 'framer-motion'
import { Brain, Target, Package, Building2, Link } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn } from '@/lib/animations'

const reasons = [
  {
    icon: Brain,
    title: 'Built for the New Era of AI Marketing',
    description:
      'We use AI tools throughout the entire growth system — not as a buzzword, but as a practical advantage in targeting, speed, and follow-up.',
  },
  {
    icon: Target,
    title: 'Focused on Booked Consultations',
    description:
      'Impressions and followers don\'t pay your rent. Every strategy we build points toward one outcome: more appointments on your calendar.',
  },
  {
    icon: Package,
    title: 'Tailored Packages, Not Bloated Retainers',
    description:
      'You pay for what you actually need. We don\'t bundle unnecessary services to inflate the invoice.',
  },
  {
    icon: Building2,
    title: 'Built Specifically for Aesthetic Clinics',
    description:
      'We understand the patient journey, the consultation model, and the competitive dynamics of the aesthetics space in a way generalist agencies don\'t.',
  },
  {
    icon: Link,
    title: 'Ads, Conversion, Automation & Strategy — Connected',
    description:
      'Most agencies do one thing. We connect all the pieces so leads don\'t get lost between your ad and your booking form.',
  },
]

export default function WhyCarterScales() {
  return (
    <section id="why-carterscales" className="py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#00e67a]/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center">Why CarterScales</p>
          <h2 className="section-heading mb-5">
            Different by Design.
            <br />
            <span className="text-gradient">Not Just in Name.</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            There are a lot of agencies claiming to grow clinics. Here&apos;s what actually makes
            us different.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            const isLast = i === reasons.length - 1
            const isSecondToLast = i === reasons.length - 2

            return (
              <motion.div
                key={reason.title}
                variants={scaleIn}
                className={`group card-base p-7 relative overflow-hidden ${
                  isLast && reasons.length % 3 === 1
                    ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto'
                    : isLast && reasons.length % 3 === 2
                    ? 'md:col-span-2 lg:col-span-1'
                    : isSecondToLast && reasons.length % 3 === 2
                    ? 'md:col-span-1 lg:col-span-1'
                    : ''
                }`}
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00e67a]/0 to-transparent group-hover:via-[#00e67a]/25 transition-all duration-500" />

                <div className="w-11 h-11 rounded-xl bg-[#00e67a]/8 border border-[#00e67a]/15 flex items-center justify-center mb-5 group-hover:bg-[#00e67a]/12 group-hover:border-[#00e67a]/25 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#00e67a]" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
