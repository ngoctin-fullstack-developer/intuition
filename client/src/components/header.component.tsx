import '../styles/header.style.scss'
import MyDropdown from './dropdown.component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import {Offcanvas} from 'react-bootstrap'
import {useState} from 'react'

const Header = () => {

    const [myCartShow, setMyCartShow] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const handleMyCartClose = () => setMyCartShow(false);
    const handleMyCartShow = () => {setMyCartShow(true)};
    const handleSearchClose = () => setSearchShow(false);
    const handleSearchShow = () => {setSearchShow(true)};

    return (
        <div className='header'>
            <div className='__left' >
                <MyDropdown />
                <h2>Intuition.</h2></div>
            <div className='__right' >
                <button onClick={handleSearchShow} ><SearchOutlinedIcon /></button>
                <button onClick={handleMyCartShow} ><ShoppingBasketOutlinedIcon /></button>
                <Link to="/login">Login</Link>
            </div>
            
            <Offcanvas show={searchShow} onHide={handleSearchClose} placement="start" >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <button>Checkout</button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header