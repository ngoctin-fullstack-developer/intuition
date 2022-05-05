import React from 'react'
import {Dropdown} from 'react-bootstrap'
import '../styles/header.style.scss'

const Header = () => {
    return (
        <div className='header'>
            {/** DropdownMenu */}
            {/**Name */}
            {/**Search Button */}
            {/**Cart */}
            {/**Login */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Header