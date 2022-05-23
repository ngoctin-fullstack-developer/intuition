import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector } from '../app/store'
import {Offcanvas} from 'react-bootstrap'
import { setMyCartHidden } from '../app/slices/canvas.slice';
const MyCart = () => {
    const {isMyCartShown, isEnableScroll} = useSelector(canvasSelector);
    const dispatch : AppDispatch = useDispatch();
    const handleCartClose = () => {dispatch(setMyCartHidden())};

    return(
        <Offcanvas show={isMyCartShown} onHide={handleCartClose} placement='end' scroll={isEnableScroll}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                
                </Offcanvas.Body>
            </Offcanvas>
    )

}

export default MyCart