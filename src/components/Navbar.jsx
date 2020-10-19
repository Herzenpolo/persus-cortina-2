import React, { Component } from 'react'
import Link from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'





export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav className = 'navBarContainer'>
                <img className = 'navBarLogo' src = {require('./images/logotipo.png')} alt = 'perSus Logo'/>
                    <NavLink href="/">Home</NavLink> 
                    <NavLink href="/aboutus">About Us</NavLink> 
                    <NavLink href="/privacy">Privacy Policy</NavLink> 
                    <NavLink href="/terms">Terms & Conditions</NavLink>
                </Nav>
            </div>
        )
    }
}
