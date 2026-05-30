import Hero from '@/components/sections/Hero'
import WhoWeHelp from '@/components/sections/WhoWeHelp'
import WhatWeDo from '@/components/sections/WhatWeDo'
import AIImplementation from '@/components/sections/AIImplementation'
import TailoredPackages from '@/components/sections/TailoredPackages'
import Process from '@/components/sections/Process'
import WhyCarterScales from '@/components/sections/WhyCarterScales'
import AuditSection from '@/components/sections/AuditSection'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <WhatWeDo />
      <AIImplementation />
      <TailoredPackages />
      <Process />
      <WhyCarterScales />
      <AuditSection />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  )
}
