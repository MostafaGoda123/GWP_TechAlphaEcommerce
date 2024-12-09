import React, { useContext  } from 'react'
import { ProductContext } from '../context/allProductContext'
import { Link } from 'react-router-dom'

const Cart = () => {

   let { products , setProducts , numberOfCartItems } = useContext(ProductContext)
   let cartItems = products.filter((prod) => prod.cartQuantity > 0)
   let totalPrice = 0
   cartItems.map((item) => totalPrice += item.price * item.cartQuantity)
   function ClearCart() {
      setProducts(products.map((prod) =>{
         prod.cartQuantity = 0;
         return prod;
      }))
   }
   function DecreaseOne(prodId) {
      setProducts(products.map((prod) =>{
         if ( prod.id === prodId ) {
            prod.cartQuantity-- ;
         }
         return prod;
      }))
   }
   function IncreaseOne(prodId) {
      setProducts(products.map((prod) =>{
         if ( prod.id === prodId ) {
            prod.cartQuantity++ ;
         }
         return prod;
      }))
   }


   return (
      <section className='py-14 min-h-[80vh]'>
         {cartItems.length>0 ?
         <div className="container flex flex-col gap-8">
            <p className="text-center text-2xl md:text-4xl font-semibold">You've added <span className="text-amber-500">{numberOfCartItems}</span> items</p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {cartItems.map((item , index) => (
                  <div key={index+777} className='bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-50'>
                     <img src={item.image} alt="" className={`w-full aspect-square`} />
                     <div className="flex flex-col gap-4 p-4 font-semibold text-xl">
                        <p className="text-amber-500 text-lg">{item.title}</p>
                        <p className="">{item.description}</p>
                        <div className="flex justify-between item-center">
                           <p className="flex flex-col gap-1">
                              <span className="font-normal text-neutral-500">Total Price</span>
                              <span className="text-amber-500 ">{(item.price * item.cartQuantity).toFixed(2)}</span>
                           </p>
                           <p className="flex flex-col gap-1">
                              <span className="font-normal text-neutral-500 text-center">Quantity</span>
                              <span className="text-amber-500 flex item-center gap-1">
                                 <span onClick={() => DecreaseOne(item.id)} className="border border-amber-500 w-8 h-8 flex justify-center item-center rounded-full cursor-pointer duration-300 hover:shadow-md hover:shadow-amber-500">-</span>
                                 <span className="w-8 h-8 flex justify-center item-center">{item.cartQuantity}</span>
                                 <span onClick={() => IncreaseOne(item.id)} className="border border-amber-500 w-8 h-8 flex justify-center item-center rounded-full cursor-pointer duration-300 hover:shadow-md hover:shadow-amber-500">+</span>
                              </span>
                           </p>
                           
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-5">
               <button onClick={()=>ClearCart()} className='h-fit text-xl md:text-2xl py-2 px-4 rounded-lg border-2 border-amber-500 duration-300 hover:bg-amber-500 hover:shadow-md hover:shadow-amber-500 hover:text-white text-amber-500'>Clear Cart</button>
               <div className="flex flex-col gap-2 w-full max-w-[500px]">
                  <p className="w-full flex justify-between items-center font-semibold text-xl md:text-2xl">
                     <span>Subtotal</span>
                     <span className="text-amber-500">${totalPrice.toFixed(2)}</span>
                  </p>
                  <p className="text-neutral-500 text-lg font-semibold">Taxes and shipping costs are calculated at the checkout</p>
               <Link to={`/`} className='text-xl md:text-2xl py-2 px-4 rounded-lg border-2 border-amber-500 duration-300 bg-amber-500 hover:shadow-md hover:shadow-amber-500 text-white text-center'>CheckOut</Link>
               <Link to={`/products`} className="text-lg text-amber-500 font-normal duration-300 hover:ps-2 hover:font-semibold w-fit">Continue Shopping</Link>
            </div>
            </div>
         </div>
         :
         <div className='flex items-center justify-center flex-col font-semibold text-xl md:text-3xl gap-5'>
            <p>Your cart is empty</p>
            <Link to={`/products`} className="text-amber-500 font-normal duration-300 pb-1 border-b-2 border-b-transparent hover:border-amber-500">Start Shopping</Link>
         </div>
         }
      </section>
   )
}

export default Cart
