'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const faqs = [
  {
    question: 'What types of clinics do you work with?',
    answer:
      'We work with aesthetic clinics and appearance-improvement businesses, including med spas, men\'s aesthetic clinics, hair restoration clinics, plastic surgery clinics, wellness clinics, laser clinics, skin clinics, and any business focused on helping people improve how they look. If your business books consultations or appointments in the aesthetics space, we can likely help.',
  },
  {
    question: 'Do I need to buy a full package?',
    answer:
      'No. Every clinic has different needs. Some need better ads. Some need a better website. Some need their follow-up fixed. We build scoped packages around what your clinic actually needs, so you don\'t pay for services that aren\'t relevant to your situation. The free audit helps us determine exactly where to start.',
  },
  {
    question: 'Can you help if I already run ads?',
    answer:
      'Yes. A lot of clinics already run ads but aren\'t happy with the results. Common problems include weak creative, poor targeting, no retargeting, missing landing pages, or slow follow-up that lets good leads go cold. We can audit what you\'re currently running and identify the specific improvements that will make a difference.',
  },
  {
    question: 'Do you build websites too?',
    answer:
      'Yes, we can build or redesign websites as part of a package. More often, we do conversion optimization on existing sites, improving the copy, calls-to-action, booking flow, and structure to turn more visitors into booked consultations. A new site isn\'t always necessary. A better-converting one usually is.',
  },
  {
    question: 'How does AI actually help my clinic\'s marketing?',
    answer:
      'AI helps in practical ways: faster audience testing, automated lead follow-up so no one slips through the cracks, competitor intelligence, ad creative analysis, and smarter campaign decisions based on data. It doesn\'t replace the human side of your business. It makes the marketing system that feeds your business faster and more efficient.',
  },
  {
    question: 'What is included in the free audit?',
    answer:
      'The free AI Growth Audit covers your website conversion, calls-to-action, retargeting setup, follow-up systems, competitor positioning, lead form friction, and current ad creative. You\'ll leave with a clear picture of where leads are being lost and what the highest-impact improvements are, whether you decide to work with us or not.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      className="border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#00e67a]/15 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-[#0c0c0c] hover:bg-[#0f0f0f] transition-colors duration-200"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="text-[#00e67a]/40 text-xs font-mono font-bold flex-shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-medium text-sm leading-relaxed">{faq.question}</span>
        </div>
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center">
          {open ? (
            <Minus className="w-3.5 h-3.5 text-[#00e67a]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-[#0a0a0a]"
          >
            <div className="px-6 pb-6 pt-1">
              <div className="pl-9">
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p className="section-tag justify-center">FAQ</p>
          <h2 className="section-heading mb-5">Common Questions</h2>
          <p className="section-sub mx-auto text-center">
            Everything you need to know before booking your audit.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
