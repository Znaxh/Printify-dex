import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Socials from './components/Socials'
import Testimonial from './components/Testimonial'
import Profit from './components/Profit'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Review from './components/Review'
import ConnectStore from './components/Connect'
const App = () => {
  return (
    <div>
      <Navbar />  
      <HeroSection />
      <Features />
      <Review />
      <Testimonial />
      <Profit />
      <ConnectStore />
      <Socials /> 
      <Footer />

    </div>
  )
}

export default App