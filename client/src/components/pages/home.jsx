import React from 'react'
import Navbar from '../navbar'
import LoadData from '../landingPage/load-data'
import UploadSection from '../uploadSection/upload'
import Footer from '../footer/footer'
import Hero from '../heroSection/hero'
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <UploadSection />
        <LoadData />
        <Footer /> 
    </div>
  )
}

export default Home