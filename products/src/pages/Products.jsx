import React from 'react'
import { data } from '../store'
import './Products.css'
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Products() {
    const currentLocation = useLocation();
    console.log(currentLocation)
    return (
        <>
            {
            (currentLocation.pathname === "/Products") &&
            <>
                <h1>Products</h1>
                <div className="items">
                    {
                        data.map(item => {
                            return <Link to={`${item.id}`}>{item.title}</Link>
                        })
                    }

                </div>
            </>
        }

            <Outlet />

        </>
    )
}
