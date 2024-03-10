import React from 'react'

import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  const Fdesc = "Explore our exquisite collection of featured products. We take pride in offering these premium selections to enhance your experience.";
  const Tdesc = "Discover our latest trending products, carefully curated to keep you ahead of the curve.";
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <FeaturedProducts types="featured" desc={Fdesc}/>
      
      <FeaturedProducts types="trending" desc={Tdesc}/>
   
      
    </div>
  )
}

export default Home
