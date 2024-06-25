import React from 'react'
import TopNavigationBar from '../components/fixed/NavigationBar'
import HeroSection from '../components/sections/HeroSection'
import DescriptionSection from '../components/sections/DescriptionSection'
import Feedbacks from '../components/details/ShowFeedbacks'
import ShowRecommendedElection from '../components/details/ShowRecommendedElection'

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden sm:px-16 px-6 '>
      <TopNavigationBar />
      <HeroSection />
      <DescriptionSection />
      <ShowRecommendedElection />
      <Feedbacks />
    </div>
  )
}

export default Home