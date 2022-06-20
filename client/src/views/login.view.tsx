import React, { useState } from 'react'
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../app/store';
import { ISignin } from '../models/signin.model';
import AuthService from '../services/auth.service';
import '../styles/register.style.scss'
import { setCurrentUser } from '../app/slices/user.slice';

const LoginView = () => {
    const navigate = useNavigate();
    const dispatch : AppDispatch = useDispatch();
    const [singin, setSignin] = useState<ISignin>({
        username: '',
        password: ''
    })
    console.log(singin.username)
    console.log(singin.password)

    const renderTooltip = (msg: string) => (
        <Tooltip id="button-tooltip">{msg}</Tooltip>
    );

    async function onClickHandler(event: React.MouseEvent) {
        event.preventDefault();
        const user = await AuthService.login(singin);
        
        if(user){
            // save token here
            // console.log("login : " + user.fullname)
            // dispatch(setCurrentUser(user));
            localStorage.setItem('user',JSON.stringify(user));
            navigate('/');
        }else{
            // show modal login failed
        }
    }

    async function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        var inputID = event.currentTarget.getAttribute('id');
        if (inputID === 'login.username') {
            setSignin({ ...singin, username: event.target.value })
        } else if (inputID === 'login.password') {
            setSignin({ ...singin, password: event.target.value })
        }
    }

    async function onInputFocusOut(event: React.FocusEvent<HTMLInputElement>) {
        var inputID = event.currentTarget.getAttribute('id');

    }

    return (
        <div className='register' >
            <Form>
                <div className='__header'>
                    <div className='__line'></div>
                    <h1>Login</h1>
                    <div className='__line'></div>
                </div>
                <small>You do not have an account. <Link to='/register'>Sign up here</Link> !</small>
                <Form.Group className="mb-3" controlId="login.username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={onInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="login.password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onInputChange} required />
                </Form.Group>
                <Button id='loginBtn' variant="primary" type="submit" onClick={onClickHandler}>Sign In</Button>
            </Form>
        </div >
    )
}

export default LoginView