import React, { useContext, useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Data } from '../Context'
import './SingleProduct.css'

const SingleProduct = ({prod}) => {
  const {cart,setCart}=useContext(Data)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
  })
  return (<>
    { loading ?
      (<div className='product'>
        <SkeletonTheme color='#202020' highlightColor='#444' >
         
         <Skeleton height={300} duration={2.5} />
        </SkeletonTheme>
      </div>
        )
        :
        (<div className="products">
        <img src={prod.image} alt={prod.name} />
        <div className="product-desc">
          <span style={{fontWight:700}}>{prod.name}</span>
          <span>₹ {prod.price.substring(0,3)}</span>
        </div>
        
        {cart.includes(prod)?(
          <button className="btn btn-primary"
        onClick={()=>{ setCart(cart.filter(c=>c.id!==prod.id))
        }}
        >Remove from Cart</button>
        ):(
          <button className="btn btn-primary"
        onClick={()=>{ setCart([...cart,prod])
        }}
        >Add to Cart</button>
        )}
        
      </div>)

    }

   
    </>
  )
}

export default SingleProduct