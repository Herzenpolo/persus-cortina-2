import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Nav, Button, NavLink } from 'reactstrap';





export default class NavbarApp extends Component {


    render() {
        return (
            <div>
                <Nav className = 'navBarContainer'>
                    <Link className = 'navLink' to="/">Home</Link> 
                    {/* <NavLink className = 'navLink' href="/aboutus">About Us</NavLink>  */}
                    <Link className = 'navLink' to="/privacy">Privacy Policy</Link> 
                    <Link className = 'navLink' to="/terms">Terms & Conditions</Link>
                </Nav>
            </div>
        )
    }
}
