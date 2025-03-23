import React , {useState} from 'react'
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import SingleProduct from './SingleProduct';




const Card = ({ item }) => {
  const [singlePr, setsinglePr] = useState();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const dta = item._id;
  const goToSingleProduct = (item) => {
    setsinglePr(item)
    console.log(item)
    navigate('/single ')
    
  }


  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="card-image cursor-pointer">
        
        <Link to={{ pathname: '/single'}} state={{item}}>
        
        <img src={item.image} alt=""    />
        </Link>
        {/* <SingleProduct singlePr={singlePr}/> */}
       
        
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <p>Price: {item.price}</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick={() => addToCart(item , console.log(item._id))}>ADD TO CART </button>
        <Link to={{ pathname: '/checkout' }} state={{ item }}>
            <button className="btn btn-primary">Buy Now</button>
        </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Card
