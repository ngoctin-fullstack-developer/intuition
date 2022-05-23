import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector } from '../app/store'
import { Offcanvas, ListGroup } from 'react-bootstrap'
import { setSearchBoxHidden } from '../app/slices/canvas.slice';
import '../styles/searchbox.style.scss'
import React, { useState, useRef } from 'react';
import { IProduct } from '../models/product.model';
import ProductService from '../services/product.service';
const SearchBox = () => {
    const { isSearchBoxShown, isEnableScroll, placement } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    const handleSearchClose = () => { dispatch(setSearchBoxHidden()) };
    const [products, setProducts] = useState<Array<IProduct>>([]);

    async function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        // call service to set search products
        var searchValue = event.currentTarget.value;
        console.log(searchValue.length)
        if (searchValue.length > 0) {
            var data: Array<IProduct> = await ProductService.getProductsByLikeName(searchValue, 5);
            setProducts(data);
        }else if(searchValue.length === 0) {
            setProducts([]);
        }
    }

    return (
        <Offcanvas show={isSearchBoxShown} onHide={handleSearchClose} placement='start' scroll={isEnableScroll}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Products</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <input type="text" name="" id="searchValue" onChange={onChangeHandler} />
                <ListGroup>
                    {products.map(product =>
                        <ListGroup.Item key={product.no}>
                            {product.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default SearchBox