import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/allProductContext'

const Navbar = () => {

   let { numberOfCartItems } = useContext(ProductContext)

   return (
      <nav className='h-[10vh] w-full bg-violet-600 text-white'>
         <div className="container flex justify-between items-center h-full">
            <Link to={'/'}>
               <h1 className="font-semibold text-2xl md:text-3xl">Tech<span className='text-amber-500'>Alpha</span></h1>
            </Link>
            <ul className="flex items-center gap-5 text-lg md:text-2xl">
               <li>
                  <Link className='hover:text-amber-500 duration-300' to={'/'}>Home</Link>
               </li>
               <li>
                  <Link className='hover:text-amber-500 duration-300' to={'/products'}>Products</Link>
               </li>
               <li>
                  <Link to={'/cart'} className='relative block  p-1 me-2'>
                     <FaShoppingCart className='hover:text-amber-500 duration-300' />
                     <span className="absolute -top-2 -right-2 rounded-full bg-amber-500 w-5 h-5 flex items-center justify-center text-sm sm:text-base">{numberOfCartItems}</span>
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar
