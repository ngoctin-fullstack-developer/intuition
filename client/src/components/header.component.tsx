import '../styles/header.style.scss'
import MyDropdown from './dropdown.component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { AppDispatch, userSelector } from '../app/store';
import { useDispatch } from 'react-redux';
import { setSearchBoxShown, setMyCartShown, setMyCartHidden, setSearchBoxHidden } from '../app/slices/canvas.slice'
import SearchBox from './searchbox.component';
import MyCart from './cart.component';
import AuthService from '../services/auth.service';
import { IUser, initialUser } from '../models/user.model';

const Header = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [user,setUser] = useState<IUser>(initialUser);
    const dispatch: AppDispatch = useDispatch();
    const handleSearchShow = () => { dispatch(setSearchBoxShown()) };
    const handleCartShow = () => { dispatch(setMyCartShown()) };

    useEffect(() => {
        dispatch(setMyCartHidden());
        dispatch(setSearchBoxHidden());
        setIsLoggedin(AuthService.isLoggedIn());
        if(isLoggedin){
            var currUser = AuthService.getCurrentUser();
            if(currUser){
                setUser(currUser);
            }
        }
    }, [])

    useEffect(() => {
        setIsLoggedin(AuthService.isLoggedIn());
        if(isLoggedin){
            var currUser = AuthService.getCurrentUser();
            if(currUser){
                setUser(currUser);
            }
        }
    }, [isLoggedin, user])

    function logoutHandler(event:React.MouseEvent) {
        AuthService.logout();
        setIsLoggedin(false);
    }

    return (
        <div className='header'>
            <div className='__left' >
                <MyDropdown />
                <h2>Intuition.</h2></div>
            <div className='__right' >
                <button onClick={handleSearchShow} ><SearchOutlinedIcon /></button>
                <button onClick={handleCartShow} ><ShoppingBasketOutlinedIcon /></button>
                {isLoggedin ? <div className='__profile' >
                    <small>Hi,</small>
                    <p>{user.fullname}</p>
                    <button onClick={logoutHandler} >Log out</button>
                </div> : <Link to="/login">Login</Link>}
            </div>
            <SearchBox />
            <MyCart />
        </div>
    )
}

export default Header