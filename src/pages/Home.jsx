import React from 'react'
import TopNavigationBar from '../components/NavigationBar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <TopNavigationBar />
      <HeroSection />
    </div>
  )
}

export default Home