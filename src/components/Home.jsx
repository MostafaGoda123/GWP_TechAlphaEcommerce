import React, { useContext , useRef } from 'react'
import Products from './Products';
import Slider from "react-slick";
import { ProductContext } from '../context/allProductContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Home = () => {

   let { homeData } = useContext(ProductContext)
   const sliderRef = useRef(null);
   const goToNextSlide = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };
   const goToPrevSlide = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      adaptiveHeight: true,
      arrows:false
   };

   return (
      <section>
         <div className="h-[90vh] w-full overflow-hidden bg-red-500 bg-opacity-25 relative">
            <Slider {...settings} ref={sliderRef} >
               {homeData.map((item,index) => (
               <section key={index+9898} className={`w-full h-[90vh]`}>
                  <div style={{backgroundImage:`url(${item.image})` , backgroundSize:'cover' , backgroundPosition:'center' , height: '100%' , width:'full'}}>
                  <div className='container w-full h-full flex justify-center flex-col gap-5'>
                     <h1 className="max-w-[800px] text-3xl md:text-6xl uppercase font-semibold text-white">{item.title}</h1>
                     <p className="max-w-[800px] text-lg md:text-xl text-neutral-100">{item.description}</p>
                     <button className='text-lg md:text-xl uppercase py-2 px-4 w-fit rounded-lg border-2 border-amber-500 text-amber-500 duration-300 hover:bg-amber-500 hover:shadow-md hover:shadow-amber-500 hover:text-white'>{item.buttonText}</button>
                  </div>
                  </div>
               </section>
               ))}
            </Slider>
            <div className="absolute bottom-5 left-0 w-full ">
            <div className="container  bg-opacity-50 flex justify-between items-center text-4xl md:text-5xl text-amber-500">
               <FaArrowCircleLeft onClick={goToPrevSlide} className='bg-white rounded-full hover:shadow-md hover:shadow-amber-500 cursor-pointer duration-300' />
               <FaArrowCircleRight onClick={goToNextSlide} className='bg-white rounded-full hover:shadow-md hover:shadow-amber-500 cursor-pointer duration-300' />
            </div>
            </div>
         </div>
         <Products />
      </section>
   )
}

export default Home
