import '../styles/header.style.scss'
import MyDropdown from './dropdown.component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            {/**Search Button */}
            {/**Cart */}
            {/**Login */}
            <div className='__left' >
                <MyDropdown />
                <h2>Intuition.</h2></div>
            <div className='__right' >
                <button><SearchOutlinedIcon/></button>
                <button><ShoppingBasketOutlinedIcon/></button>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Header