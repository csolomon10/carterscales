'use client'

import { motion } from 'framer-motion'
import {
  Target,
  Users,
  Brain,
  Globe,
  Layout,
  MessageSquare,
  Search,
  TrendingUp,
  Palette,
  RotateCcw,
  Calendar,
  BarChart2,
  Map,
  Check,
  ArrowRight,
} from 'lucide-react'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

const services = [
  {
    icon: Target,
    title: 'Meta Ads Strategy & Campaign Setup',
    description: 'Campaigns built for booked consultations, not just impressions.',
  },
  {
    icon: Users,
    title: 'Lead Generation Systems',
    description: 'Structured funnels that bring in qualified, high-intent prospects.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Marketing Workflows',
    description: 'Automation and AI tools that speed up every step of the funnel.',
  },
  {
    icon: Globe,
    title: 'Website Conversion Optimization',
    description: 'Turn visitors into booked consultations with proven conversion fixes.',
  },
  {
    icon: Layout,
    title: 'Landing Page Strategy',
    description: 'Purpose-built pages that match your ad traffic and convert it.',
  },
  {
    icon: MessageSquare,
    title: 'CRM & Follow-Up Automation',
    description: 'Systematic follow-up so no lead falls through the cracks.',
  },
  {
    icon: Search,
    title: 'Competitor Research',
    description: 'Know what competitors are running and where you can outposition them.',
  },
  {
    icon: TrendingUp,
    title: 'Offer Positioning',
    description: 'Frame your services so they stand out in a crowded market.',
  },
  {
    icon: Palette,
    title: 'Creative Strategy',
    description: 'Ad creatives designed to stop the scroll and start the conversation.',
  },
  {
    icon: RotateCcw,
    title: 'Retargeting Campaigns',
    description: 'Re-engage warm audiences who showed interest but didn\'t book.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking Optimization',
    description: 'Remove friction in the booking flow so interested leads actually show up.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Performance Tracking',
    description: 'Clear reporting on what\'s working, what\'s not, and what\'s next.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center">What We Do</p>
          <h2 className="section-heading mb-5">
            Everything Your Clinic Needs to Grow
          </h2>
          <p className="section-sub mx-auto text-center">
            Not a bloated agency selling you 15 services you&apos;ll never use. Every service we offer
            exists to drive one outcome: more booked consultations.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={scaleIn}
                className="group relative bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#00e67a]/20 hover:bg-[#0f0f0f] transition-all duration-300 cursor-default"
              >
                {/* Top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00e67a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0f0f0f] border border-[#1f1f1f] group-hover:border-[#00e67a]/25 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#00e67a]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{service.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Growth Strategy — full-width featured card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-4"
        >
          <div className="group relative bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl p-6 hover:border-[#00e67a]/20 hover:bg-[#0f0f0f] transition-all duration-300">
            {/* Top accent line on hover */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00e67a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Left: icon + title + description */}
              <div className="flex items-start gap-4 sm:flex-1">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0f0f0f] border border-[#1f1f1f] group-hover:border-[#00e67a]/25 flex items-center justify-center transition-colors duration-300">
                  <Map className="w-4 h-4 text-[#00e67a]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">Growth Strategy</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">For clinics that want a clear roadmap before investing in marketing.</p>
                </div>
              </div>

              {/* Right: bullets + button */}
              <div className="sm:flex-1 flex flex-col gap-4 sm:pl-0 pl-[52px]">
                <ul className="space-y-1.5">
                  {[
                    'Growth audits',
                    'Competitor analysis',
                    'Patient acquisition strategy',
                    'AI opportunity mapping',
                    'Marketing roadmap creation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#00e67a] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/cartersolomon1128/get-your-free-growth-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414] border border-[#2a2a2a] text-white text-xs font-semibold rounded-lg hover:border-[#00e67a]/30 hover:bg-[#181818] transition-all duration-200 self-start"
                >
                  Book a Free Audit
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
