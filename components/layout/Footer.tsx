'use client'

import Link from 'next/link'

const footerLinks = [
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Services', href: '#services' },
  { label: 'AI Systems', href: '#ai-implementation' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                Carter<span className="text-[#00e67a]">Scales</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI-powered growth systems for aesthetic clinics and appearance-improvement businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">Get Started</p>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Book a free AI Growth Audit and see exactly where your clinic is leaving leads on the table.
            </p>
            {/* REPLACE: Update this Calendly link with your actual booking URL */}
            <a
              href="https://calendly.com/cartersolomon1128/get-your-free-growth-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00e67a] text-black text-sm font-semibold rounded-lg hover:bg-[#00ff88] transition-all duration-200 shadow-[0_0_20px_rgba(0,230,122,0.2)]"
            >
              Book Free Audit
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} CarterScales. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            {/* REPLACE: Add your actual location or remove this line */}
            Built for clinics ready to grow.
          </p>
        </div>
      </div>
    </footer>
  )
}
