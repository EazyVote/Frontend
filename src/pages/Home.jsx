import React from 'react'
import TopNavigationBar from '../components/NavigationBar'
import HeroSection from '../components/HeroSection'
import DescriptionSection from '../components/DescriptionSection'
import Feedbacks from '../components/Feedbacks'
import Responsive from '../components/try'

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden sm:px-16 px-6 '>
      <TopNavigationBar />
      <HeroSection />
      <DescriptionSection />
      <Feedbacks />
      {/* <Responsive/> */}
    </div>
  )
}

export default Home