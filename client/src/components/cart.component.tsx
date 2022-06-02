import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector, cartSelector } from '../app/store'
import { ListGroup, Offcanvas, Button } from 'react-bootstrap'
import { setMyCartHidden } from '../app/slices/canvas.slice';
import '../styles/cart.style.scss'
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart.item.component'
import React from 'react';
const MyCart = () => {
    const { isMyCartShown, isEnableScroll } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    const handleCartClose = () => { dispatch(setMyCartHidden()) };
    const cart = useSelector(cartSelector)
    let navigate = useNavigate();

    function onClickHandler(event:React.MouseEvent) {
        var btnId = event.currentTarget.getAttribute('id');
        if(btnId === 'btnProceed'){
            if(cart.items.length !== 0){
                // navigate to checkout pay
                // navigate('/checkout',{replace : true});
                navigate('/checkout',{
                    replace : false,
                })
            }else{
                //show modal
            }
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
                <Button id='btnProceed' onClick={onClickHandler} variant="success">PROCEED TO CHECKOUT</Button>
                {/* <div className='line'></div> */}
                <ListGroup>
                    {cart.items.map(item => (
                        <CartItem key={item.product.no} {...item} />
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default MyCart