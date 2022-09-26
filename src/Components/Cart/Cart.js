import React,{useState,useEffect,useContext} from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import './Cart.css'
import {Data} from '../Context'

const Cart = () => {
  
  const {cart,setCart}=useContext(Data)

 const [total,setTotal]=useState()
 useEffect(() => {
   setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price,10),0))
 }, [cart])
 
  // console.log(total);
  return (
    <div>
      
      <button className='btn btn-danger'> Total: ₹{total}</button>
      <div className="product-container">
    {
    cart.map(prod=>{
      return <SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
     
    })}
      </div>

    </div>
  )
}

export default Cart