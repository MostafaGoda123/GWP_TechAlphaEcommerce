import React, { useContext } from 'react'
import { ProductContext } from '../context/allProductContext'

const Products = () => {

   let { products , setProducts } = useContext(ProductContext)
   function addToCart(pId) {
      let newProducts = products.map((prod) => {
         if (prod.id === pId) {
            prod.cartQuantity += 1
         }
         return prod
      })
      setProducts(newProducts)
   }

   return (
      <section className='py-14'>
         <div className="container ">
            <h1 className='mb-10 text-3xl text-center font-semibold'>Browse all products</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {products.map((product , index) => (
                  <div key={index+959} className='bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-50'>
                     <img src={product.image} alt="" className={`w-full aspect-square`} />
                     <div className="flex flex-col gap-4 p-4 font-semibold text-xl">
                        <p className="text-amber-500 text-lg">{product.title}</p>
                        <p className="">{product.description}</p>
                        <p className=" text-neutral-400 font-normal">{product.paragraph}</p>
                        <div className="flex justify-between items-center">
                           <span className="text-amber-500 ">${product.price}</span>
                           <button onClick={()=>addToCart(product.id)} className='bg-violet-600 py-2 px-4 rounded-lg shadow-md shadow-violet-600 duration-300 hover:bg-amber-500 hover:shadow-amber-500 text-white'>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Products
