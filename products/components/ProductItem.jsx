import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductItem.css"

export default function ProductItem({ title, imageUrl, price, size }) {
    return (
        <div className="product-item">
            <h1>{title}</h1>
            <p>{size}</p>
            <img src={imageUrl} />
            <p>{price}</p>
            <Link to="/Products" className='back-link'>Back</Link>
        </div>
    )
}
