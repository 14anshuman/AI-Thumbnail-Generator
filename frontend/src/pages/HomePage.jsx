import React from 'react'
import HeroSection from '../sections/hero-section'
import TrustedCompanies from '../sections/trusted-companies'
import Features from '../sections/features'
import WorkflowSteps from '../sections/workflow-steps'
import Testimonials from '../sections/testimonials'
import FaqSection from '../sections/faq-section'
import CallToAction from '../sections/call-to-action'


const HomePage = () => {
  return (
    <div>
 <main className='px-4'>
                <HeroSection />
                <TrustedCompanies />
                <Features />
                <WorkflowSteps />
                <Testimonials />
                <FaqSection />
                <CallToAction/>
                
            </main>



    </div>
  )
}

export default HomePage