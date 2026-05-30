import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CarterScales — AI-Powered Growth for Aesthetic Clinics',
  description:
    'CarterScales helps med spas, plastic surgery clinics, hair restoration clinics, and other aesthetic businesses get more booked consultations using AI-powered ads, smarter follow-up, and conversion-focused growth systems.',
  keywords: [
    'aesthetic clinic marketing',
    'med spa ads',
    'AI marketing',
    'hair restoration marketing',
    'plastic surgery ads',
    'clinic growth',
    'medspa lead generation',
    'AI-powered advertising',
  ],
  // REPLACE: Update with your actual domain before deploying
  metadataBase: new URL('https://carterscales.com'),
  openGraph: {
    title: 'CarterScales — AI-Powered Growth for Aesthetic Clinics',
    description:
      'Stop advertising like it\'s still 2010. Get more booked consultations with AI-powered growth systems built specifically for aesthetic clinics.',
    type: 'website',
    url: 'https://carterscales.com',
    siteName: 'CarterScales',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarterScales — AI-Powered Growth for Aesthetic Clinics',
    description:
      'Stop advertising like it\'s still 2010. AI-powered marketing systems for aesthetic clinics.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050505] text-white antialiased font-[family-name:var(--font-inter)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
