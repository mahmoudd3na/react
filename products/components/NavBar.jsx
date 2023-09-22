import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"} end>
                    Home
                </NavLink>
                <NavLink to="/Products" className={({isActive} ) => isActive ? "nav-link-active" : "nav-link" } >Products</NavLink>
            </div>
        </>
    )
}
