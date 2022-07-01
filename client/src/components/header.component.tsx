import '../styles/header.style.scss'
import MyDropdown from './dropdown.component'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { AppDispatch, authSelector, userSelector } from '../app/store';
import { useDispatch } from 'react-redux';
import { setSearchBoxShown, setMyCartShown, setMyCartHidden, setSearchBoxHidden } from '../app/slices/canvas.slice'
import SearchBox from './searchbox.component';
import MyCart from './cart.component';
import AuthService from '../services/auth.service';
import { IUser, initialUser } from '../models/user.model';
import { useSelector } from 'react-redux';
import { logout } from '../app/slices/auth.slice';

const Header = () => {

    const dispatch: AppDispatch = useDispatch();
    const auth = useSelector(authSelector);
    const handleSearchShow = () => { dispatch(setSearchBoxShown()) };
    const handleCartShow = () => { dispatch(setMyCartShown()) };

    useEffect(() => {
        dispatch(setMyCartHidden());
        dispatch(setSearchBoxHidden());
    }, [])


    function logoutHandler(event:React.MouseEvent) {
        dispatch(logout());
    }

    return (
        <div className='header'>
            <div className='__left' >
                <MyDropdown />
                <h2>Intuition.</h2></div>
            <div className='__right' >
                <button onClick={handleSearchShow} ><SearchOutlinedIcon /></button>
                <button onClick={handleCartShow} ><ShoppingBasketOutlinedIcon /></button>
                {(auth.isLoggedIn && auth.user !== null) ? <div className='__profile' >
                    <small>Hi,</small>
                    <p>{auth.user.fullname}</p>
                    <button onClick={logoutHandler} >Log out</button>
                </div> : <Link to="/login">Login</Link>}
            </div>
            <SearchBox />
            <MyCart />
        </div>
    )
}

export default Header