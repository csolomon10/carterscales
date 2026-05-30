'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Mail, Globe } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight } from '@/lib/animations'

type FormData = {
  name: string
  email: string
  business: string
  website: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  business: '',
  website: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // REPLACE: Connect this form to your preferred submission service.
    // Options:
    //   - Formspree: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    //   - Netlify Forms: add name="contact" data-netlify="true" to the <form> element
    //   - A Next.js API route at /app/api/contact/route.ts
    //   - Any other webhook or backend service

    await new Promise((r) => setTimeout(r, 900)) // placeholder delay
    setSubmitted(true)
    setLoading(false)
  }

  const inputClass =
    'w-full bg-[#0c0c0c] border border-[#1f1f1f] rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00e67a]/40 focus:bg-[#0f0f0f] transition-all duration-200'

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-tag">Contact</p>
            <h2 className="section-heading mb-6">
              Start With a
              <br />
              <span className="text-gradient">Free Conversation.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Fill out the form and we&apos;ll review your clinic&apos;s situation before we connect.
              The more detail you include, the more prepared we&apos;ll be to make the audit useful
              from minute one.
            </p>

            {/* Contact highlights */}
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  // REPLACE: Update with your actual email address
                  value: 'hello@carterscales.com',
                },
                {
                  icon: Globe,
                  label: 'Website',
                  // REPLACE: Update with your actual domain
                  value: 'carterscales.com',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0f0f0f] border border-[#1f1f1f] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#00e67a]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs mb-0.5">{item.label}</p>
                      <p className="text-white text-sm">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Or just book directly */}
            <div className="mt-10 p-5 bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl">
              <p className="text-gray-400 text-sm mb-3">
                Prefer to skip the form and book directly?
              </p>
              {/* REPLACE: Update with your actual Calendly booking link */}
              <a
                href="https://calendly.com/carterscales/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00e67a] text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Book on Calendly
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {submitted ? (
              <div className="bg-[#0c0c0c] border border-[#00e67a]/25 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#00e67a]/10 border border-[#00e67a]/25 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-[#00e67a]" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Request Received</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  We&apos;ll review your info and reach out within one business day to schedule your
                  free audit.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-medium">
                      Full Name <span className="text-[#00e67a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-medium">
                      Email Address <span className="text-[#00e67a]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@yourclinic.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">
                    Business Name <span className="text-[#00e67a]">*</span>
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your Clinic Name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://yourclinic.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What are you currently doing for marketing? What's not working? What's your main goal right now?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-2.5 py-4 bg-[#00e67a] text-black font-bold rounded-xl hover:bg-[#00ff88] transition-all duration-200 shadow-[0_0_25px_rgba(0,230,122,0.3)] hover:shadow-[0_0_40px_rgba(0,230,122,0.45)] disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Free Audit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  We review every submission personally. No spam, no automated sales sequence.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
