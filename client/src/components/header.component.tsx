import '../styles/header.style.scss'
import MyDropdown from './dropdown.component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { AppDispatch } from '../app/store';
import { useDispatch } from 'react-redux';
import {setSearchBoxShown,setMyCartShown} from '../app/slices/canvas.slice' 
import SearchBox from './searchbox.component';
import MyCart from './cart.component';

const Header = () => {

    const [counter,setCounter] = useState(0);

    const dispatch : AppDispatch = useDispatch();
    const handleSearchShow = () => {dispatch(setSearchBoxShown())};
    const handleCartShow = () => {dispatch(setMyCartShown())};    
    return (
        <div className='header'>
            <div className='__left' >
                <MyDropdown />
                <h2>Intuition.</h2></div>
            <div className='__right' >
                <button onClick={handleSearchShow} ><SearchOutlinedIcon /></button>
                <button onClick={handleCartShow} ><ShoppingBasketOutlinedIcon /></button>
                <Link to="/login">Login</Link>
            </div>
            <SearchBox/>
            <MyCart/>
            {/* <Offcanvas show={searchShow} onHide={handleSearchClose} placement="start" >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <button>Checkout</button>
                </Offcanvas.Body>
            </Offcanvas> */}
        </div>
    )
}

export default Header