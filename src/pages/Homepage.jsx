import React from 'react'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Superpage from '../components/Superpage/Superpage'
import Footer from '../components/Footer/Footer'
import CTA from '../components/CTA/CTA'

const Homepage = () => {
  return (
    <>
        <Header/>
        <Hero />
        <Superpage />
        <CTA />
        <Footer />
    </>
  )
}

export default Homepage