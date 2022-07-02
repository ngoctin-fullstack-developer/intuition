import React, { useEffect, useState } from 'react'
import Footer from '../components/footer.component'
import Header from '../components/header.component'
import { IProduct } from '../models/product.model'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import '../styles/productsView.style.scss'
import { setMyFilterShown } from '../app/slices/canvas.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import Filter from '../components/filter.component';
const ProductsView = () => {

    const [products, setProducts] = useState<Array<IProduct> | null>(null);
    const dispatch : AppDispatch = useDispatch();
    function onClickHandler() {
        dispatch(setMyFilterShown());
    }
    useEffect(() => {

    }, [])

    return (
        <div className='productView'>
            <Header />
            <div className='__title'>
                <h1>Products</h1>
                <button onClick={onClickHandler}><FilterAltOutlinedIcon /></button>

            </div>
            <div className='__content'>

            </div>
            <Footer />
            <Filter/>
        </div>
    )
}

export default ProductsView