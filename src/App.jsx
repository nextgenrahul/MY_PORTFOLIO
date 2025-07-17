import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowCaseSection />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App