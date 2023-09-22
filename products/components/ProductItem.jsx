import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ title, imageUrl, price, size }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{size}</p>
            <img src={imageUrl} />
            <p>{price}</p>
            <Link to="/Products">Back</Link>
        </div>
    )
}
