import React, { Component } from 'react'
import Link from 'react-router-dom'
import { Nav, Button, NavLink } from 'reactstrap';





export default class NavbarApp extends Component {


    render() {
        return (
            <div>
                <Nav className = 'navBarContainer'>
                    <NavLink className = 'navLink' href="/">Home</NavLink> 
                    {/* <NavLink className = 'navLink' href="/aboutus">About Us</NavLink>  */}
                    <NavLink className = 'navLink' href="/privacy">Privacy Policy</NavLink> 
                    <NavLink className = 'navLink' href="/terms">Terms & Conditions</NavLink>
                </Nav>
            </div>
        )
    }
}
