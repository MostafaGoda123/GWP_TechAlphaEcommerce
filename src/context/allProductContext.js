import { createContext, useState , useEffect } from "react";


export let ProductContext = createContext()

export default function ProductContextProvider ({children}) {

   const [products, setProducts] = useState([
      { id:1  , cartQuantity:0 , title:'Camera' , description:'Blink Mini – Compact indoor plug-in smart security camera' , paragraph : 'Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera' , price:64.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg' },
      { id:2  , cartQuantity:0 , title:'Camera' , description:'Vlogging Camera, 4K Digital Camera for YouTube with WiFi' , paragraph : 'It\'s super suitable for the \'happy snapper\' who just hope to point and shoot to take good quality images' , price:109.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg' },
      { id:3  , cartQuantity:0 , title:'TV' , description:'SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR' , paragraph : 'Witness millions of shades of color through powerful Dynamic Crystal technology' , price:497.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png' },
      { id:4  , cartQuantity:0 , title:'TV' , description:'Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV' , paragraph : 'The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast' , price:698.00 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/287330_fhhcyx.jpg' },
      { id:5  , cartQuantity:0 , title:'Console' , description:'PlayStation 4 Slim 1TB Console - Black' , paragraph : 'When present, batteries have a capacity that exceeds 80% of the new equivalent' , price:479.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/0188101_sony-playstation-4-slim-1tb-gaming-console-ps4_550_obrjcw.jpg' },
      { id:6  , cartQuantity:0 , title:'Console' , description:'Xbox Series S Fortnite & Rocket League Bundle' , paragraph : 'Get the all-digital Xbox Series S Fortnite & Rocket League Bundle featuring the Midnight Drive Pack' , price:199.00 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/2f0a6466-be4f-45a1-868f-dce57c3c6469.0838a0a2ac552dd7273083559d7f3c70_d4i7zb.jpg' },
      { id:7  , cartQuantity:0 , title:'Headphones' , description:'JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - White' , paragraph : 'The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound' , price:29.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/JBL_Tune_510BT_Headphone-04.jpg-500x500_vqlhjf.jpg' },
      { id:8  , cartQuantity:0 , title:'Headphones' , description:'Bluetooth Headphones Wireless Earbuds 36Hrs Playtime Wireless Charging' , paragraph : 'Wireless earbuds with dual power display show the remaining battery of the case by the number on the screen' , price:38.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/9b890489-49e2-47aa-8b85-b71892cc16ae.3142c0cfab48b4acd4f628c8f8f39190_volxjj.jpg' },
      { id:9  , cartQuantity:0 , title:'Smart Watches' , description:'Apple Watch Series 4 (GPS, 40MM) - Silver Aluminum Case' , paragraph : 'This product will have a battery that exceeds 80% capacity relative to new' , price:147.00 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/FU642_zstpwl.jpg' },
      { id:10 , cartQuantity:0 , title:'Smart Watches' , description:'Military Smart Watch for Men Outdoor Waterproof Tactical Smartwatch' , paragraph : 'EIGIIS military smart watch has a 10 military grade certifications and can be used under the harsh environmental conditions' , price:49.99 , image:'https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/Military-Smart-Watch-Men-Outdoor-Waterproof-Tactical-Smartwatch-Bluetooth-Dail-Calls-Speaker-Fitness-Tracker-for-iPhone.jpg_640x640_jy4v6s.jpg' },
      { id:11 , cartQuantity:0 , title:'Headphone' , description:'Airpods Max Headphones' , paragraph : 'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here' , price:1400.00 , image:'https://m.media-amazon.com/images/I/61WL8oHhasL._AC_SL1201_.jpg' },
   ]);

   const homeData = [
      { title:'DSLR cameras for stunning photos' , description:'Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.' , buttonText:'Shop DSLR cameras now' , image:'https://i.ibb.co/XszmG02/camera.jpg' },
      { title:'Upgrade your home entertainment with our TVs' , description:'Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.' , buttonText:'Shop TVs and upgrade now' , image:'https://i.ibb.co/mtc8v16/tv.jpg' },
      { title:'Enhance your listening experience' , description:'Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.' , buttonText:'Experience enhanced sound' , image:'https://i.ibb.co/kmr5qQv/headphones.jpg' },
      { title:'Take your gaming to the next level' , description:'Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.' , buttonText:'Shop consoles and play now' , image:'https://i.ibb.co/JqxDhvZ/console.jpg' },
      { title:'Stay connected with smart watches' , description:'Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.' , buttonText:'Connect with a smart watch' , image:'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
   ];
   const [numberOfCartItems, setNumberOfCartItems] = useState(0)
   useEffect(() => {
      let n = 0;
      products.map((item) => item.cartQuantity > 0 ? n += item.cartQuantity : null )
      setNumberOfCartItems(n)
   }, [products])

   return <ProductContext.Provider value={{ products , homeData , setProducts , numberOfCartItems }}>
      {children}
   </ProductContext.Provider>

}
