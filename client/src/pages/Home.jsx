import React from 'react'
import Banner from '../components/home/Banner.jsx'
import Hero from "../components/home/Hero.jsx"
import Footer from '../components/home/Footer.jsx'
import FeaturesSection from '../components/home/Feature.jsx'
import Testimonial from '../components/home/Testimonial.jsx'

const home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <FeaturesSection />
      <Testimonial />
      <Footer />

    </div>
  )
}

export default home