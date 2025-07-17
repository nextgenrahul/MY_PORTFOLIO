import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowCaseSection />
    <LogoSection /> 
    <FeatureCards />
    <ExperienceSection />
    </>
  )
}

export default App