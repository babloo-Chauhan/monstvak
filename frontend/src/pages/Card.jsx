import React from 'react'
import { useCart } from '../context/CartContext';


const Card = ({ item }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={item.image}

          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <p>Price: {item.price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick={() => addToCart(item)}>ADD TO CART</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
