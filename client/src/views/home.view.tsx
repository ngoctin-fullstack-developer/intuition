import React from 'react'
import MyCarousel from '../components/carousel.component'
import Header from '../components/header.component'
import '../styles/home.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner.component';

const HomeView = () => {
  return (
    <div className='home' >
      <Header/>
      <Banner/>
    </div>
  )
}

export default HomeView