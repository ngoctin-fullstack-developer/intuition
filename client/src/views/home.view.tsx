import React,{useState} from 'react'
import Categories from '../components/categories.component';
import Header from '../components/header.component'
import '../styles/home.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner.component';
import Products from '../components/products.component';
import Trend from '../components/trend.component';
import Discount from '../components/discount.component';
import Footer from '../components/footer.component';


const HomeView = () => {
  return (
    <div className='home'>
      <Header/>
      <Banner/>
      <Categories/>
      <Products/>
      <Trend/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default HomeView