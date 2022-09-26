import React,{useState} from 'react'
import './Home.css'
import { faker } from '@faker-js/faker'
import SingleProduct from '../SingleProduct/SingleProduct'

const Home = ({cart,setCart}) => {

    const productsArray=[...Array(21)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image()
    }));
    // console.warn(productsArray)
    const [products]= useState(productsArray)
    // console.info(cart)
    // let id=0

  return (
    <div className="product-container">
        {
            products.map(prod=>{

               return <SingleProduct  prod={prod} cart={cart} setCart={setCart} />

            })
        }
       
    </div>
  )
}

export default Home