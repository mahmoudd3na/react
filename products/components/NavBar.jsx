import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/Products" className="nav-link">Products</NavLink>
            </div>
        </>
    )
}
