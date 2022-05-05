import React, { useState } from 'react'
import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ISignin } from '../models/signin.model';
import '../styles/register.style.scss'

const LoginView = () => {

    const [singin,setSignin] = useState<ISignin>({
        username : '',
        password : ''
    })
    console.log(singin.username)
    console.log(singin.password)

    const renderTooltip = (msg: string) => (
        <Tooltip id="button-tooltip">{msg}</Tooltip>
    );

    async function onClick(event: React.MouseEvent) {
        // call api to sign in
    }

    async function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        var inputID = event.currentTarget.getAttribute('id');
        if(inputID === 'login.username'){
            setSignin({...singin,username : event.target.value})
        }else if(inputID === 'login.password'){
            setSignin({...singin,password : event.target.value})
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
                <Button id='loginBtn' variant="primary" type="submit" onClick={onClick}>Sign In</Button>
            </Form>
        </div >
    )
}

export default LoginView