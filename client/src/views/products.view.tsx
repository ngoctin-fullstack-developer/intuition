import React, { useEffect, useState } from 'react'
import Footer from '../components/footer.component'
import Header from '../components/header.component'
import { IProduct } from '../models/product.model'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import '../styles/productsView.style.scss'
import { setMyFilterShown } from '../app/slices/canvas.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch, productsSelector } from '../app/store'
import Filter from '../components/filter.component';
import { useSelector } from 'react-redux';
import Products from '../components/products.component';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/productCard.component';
import { APPLICATION } from '../Constants/application.constant';
const ProductsView = () => {

    const { products } = useSelector(productsSelector);
    const dispatch: AppDispatch = useDispatch();
    function onClickHandler() {
        dispatch(setMyFilterShown());
    }

    return (
        <div className='productView'>
            <Header />
            <div className='__title'>
                <h1>Products</h1>
                <button onClick={onClickHandler}><FilterAltOutlinedIcon /></button>
            </div>
            <Products title={APPLICATION.PRODUCT_TITLE_PRODUCTS_FILTER} products={products}/>
            {/* <div className='__content'>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => (
                            <Col><ProductCard key={product.no} {...product} /></Col>
                        ))
                    }
                </Row>
            </div> */}
            <Footer />
            <Filter />
        </div>
    )
}

export default ProductsView