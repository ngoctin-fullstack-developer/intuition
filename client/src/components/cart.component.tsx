import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector } from '../app/store'
import { ListGroup, Offcanvas, Button } from 'react-bootstrap'
import { setMyCartHidden } from '../app/slices/canvas.slice';
import { ICartItem, initialCart as cart } from '../models/cart.model';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { removeFromCart } from '../app/slices/cart.slice';
import { Link } from 'react-router-dom';
import '../styles/cart.style.scss'
import React, { useState } from 'react';
const MyCart = () => {
    const { isMyCartShown, isEnableScroll } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    const handleCartClose = () => { dispatch(setMyCartHidden()) };
    const [selectedProduct, setSelectedProduct] = useState<ICartItem|null>(null)

    function onClickHandler(event : React.MouseEvent) {
        const btnID = event.currentTarget.getAttribute('id');
        switch (btnID) {
            case 'btnRemoveFromCart':
                
                
                break;
        
            default:
                break;
        }
    }
    return (
        <Offcanvas show={isMyCartShown} onHide={handleCartClose} placement='end' scroll={isEnableScroll}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='cart'>
                <div className='__text' >
                    <h5>Total :</h5>
                    <h5>{cart.total} VND</h5>
                </div>
                <Button variant="success">PROCEED TO CHECKOUT</Button>
                {/* <div className='line'></div> */}
                <ListGroup>
                    {cart.items.map(item => (
                        <ListGroup.Item key={item.product.no}>
                            <img src="/images/shirt01.jpg" alt="" />
                            <div className='__content' >
                                <div className='__top' >
                                    <Link to='/ProductDetail/:productID' >{item.product.name}</Link>
                                    <button id='btnRemoveFromCart' ><CloseIcon/></button>
                                </div>
                                <div className='__bottom' >
                                    <div className='_qty'>
                                        <button><KeyboardArrowUpIcon/></button>
                                        <input type="text" name="" id="" value={10} />
                                        <button><KeyboardArrowDownIcon/></button>
                                    </div>
                                    <p className='__price' >100.000</p>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default MyCart