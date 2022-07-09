import React, { useState, useEffect } from 'react'
import Categories from '../components/categories.component';
import Header from '../components/header.component'
import '../styles/home.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner.component';
import Products from '../components/products.component';
import Trend from '../components/trend.component';
import Discount from '../components/discount.component';
import Footer from '../components/footer.component';
import { APPLICATION } from '../Constants/application.constant';
import { IProduct } from '../models/product.model';
import ProductService from '../services/product.service';


const HomeView = () => {

  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    async function fetchProducts() {
      var response = await ProductService.getNewestProducts();
      setProducts(response);
    }
    fetchProducts();
  }, [])


  return (
    <div className='home'>
      <Header/>
      <Banner/>
      <Categories/>
      <Products title={APPLICATION.PRODUCT_TITLE_PRODUCTS} products={products}/>
      <Trend/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default HomeView