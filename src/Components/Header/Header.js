import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../Context'
import './Header.css'

const Header = () => {
  const {cart}=useContext(Data)
  return (
    <div className="head">
        <Link to='/' >Home</Link>
        <Link to='/cart' className='parent'>Cart <span className='pop'>{cart.length}</span></Link>
    </div>
  )
}

export default Header