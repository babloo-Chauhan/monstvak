import React from 'react'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();


  return (

    <Card className="mt-6 w-96">
      <Link to={{ pathname: '/single' }} state={{ item }}>

        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={item.image[0]}
            alt="card-image"
            className="w-full h-full  rounded-t-lg"

          />
        </CardHeader>
      </Link>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.name}
        </Typography>
        <div className='flex'>
          <Typography className="text-gray-500 line-through" >
            RS.   {item.price * 10 / 100 + item.price}
          </Typography>
          <Typography className='px-3'>
              {item.price}
          </Typography>
        </div>
        <Typography>
          {item.description}
        </Typography>

      </CardBody>

      <div className="flex  items-center  ">

        <CardFooter>
          <Button
            color="green"
            buttonType="link"
            size="lg"
            rounded={false}
            block={true}
            onClick={() => addToCart(item)}
          >
            Add to cart
          </Button>
        </CardFooter>


        <Link to={{ pathname: '/checkout' }} state={{ item }}>
          <CardFooter className="">
            <Button
              color="lightBlue"
              buttonType="link"
              size="lg"
              rounded={true}
              block={true}
            >
              Buy now</Button>
          </CardFooter>
        </Link>


      </div>
    </Card>
  )
}

export default ProductCard;
