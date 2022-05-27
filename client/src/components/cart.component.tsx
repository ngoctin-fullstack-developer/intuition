import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector, cartSelector } from '../app/store'
import { ListGroup, Offcanvas, Button } from 'react-bootstrap'
import { setMyCartHidden } from '../app/slices/canvas.slice';
import '../styles/cart.style.scss'
import CartItem from '../components/cart.item.component'
const MyCart = () => {
    const { isMyCartShown, isEnableScroll } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    const handleCartClose = () => { dispatch(setMyCartHidden()) };

    
    // function onChangeHandler(){
    //     var qtyVal  = document.getElementById('qtyVal');
    //     console.log(typeof qtyVal);
        
    // }
    
    const cart = useSelector(cartSelector)
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
                        <CartItem key={item.product.no} {...item} />
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default MyCart