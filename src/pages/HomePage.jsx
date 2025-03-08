import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeImage from "../assets/bg_pic.jpg";
import styled, { keyframes, ThemeProvider } from 'styled-components' 
import './../App.css'
import home1 from "../assets/slide1.png";
import home2 from "../assets/slide2.png";
import home3 from "../assets/slide3.png";
import home4 from "../assets/slide.png";
import Navbar from "../components/Navbar.jsx";
import spaceman from './../assets/spaceman.png' 
import slide1 from './../assets/h1.png'
import slide2 from './../assets/h2.png'
import slide3 from './../assets/h3.png'
import pack1 from './../assets/pack1.png'
import pack2 from './../assets/pack2.png'
import pack3 from './../assets/pack3.png'


const slides = [
    { image: home1, text: "Explore the Universe with Galactic Getaways" },
    { image: home2, text: "Your Dream Vacation Beyond Earth" },
    { image: home3, text: "Experience Luxury in Space Hotels" },
    { image: home4, text: "Discover New Planets and Adventures"},
  ];
const slides1 = [
    { image: slide1, text: "Explore the Universe with Galactic Getaways" },
    { image: slide2, text: "Your Dream Vacation Beyond Earth" },
    { image: slide3, text: "Experience Luxury in Space Hotels" } 
  ];

const carousal = [ 
    {  
      title: "Explore the Universe with Galactic Getaways", 
      description: "Embark on an unforgettable journey to space and beyond, exploring planets and stars." 
    }, 
    {  
      title: "Your Dream Vacation Beyond Earth", 
      description: "Plan your next adventure in space with luxurious space hotels and cosmic experiences." 
    }, 
    {  
      title: "Experience Luxury in Space Hotels", 
      description: "Stay in futuristic space hotels with breathtaking views of Earth and distant planets." 
    }, 
    {  
      title: "Discover New Planets and Adventures", 
      description: "Step on alien planets, explore extraterrestrial landscapes, and fulfill your space dream." 
    },
  
  ];
const float = keyframes`
0%{transform:translateY(-10px);}
50%{transform:translateY(15px) translateX(15px);}
100%{transform:translateY(-10px);}
`

const Spaceman = styled(motion.div)`
  position:absolute;
  top:7%;
  right:5%;
  width:10vw;
  z-index:4;

img{
  width:100%;
  height:auto;
  animation:${float} 4s ease infinite;
}
@media(max-width:480px){
  width:20vw;
  top:5%;
  right:5%;
}
`
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      title: "Moon Vacation Package",
      duration: "5 Days",
      experience: "Walk on the Moon, visit lunar stations, and experience zero gravity.",
      stay: "Lunar Space Hotel",
      price: "$500,000",
      image: pack1
    },
    {
      title: "Mars Exploration Package",
      duration: "10 Days",
      experience: "Explore the Mars base, walk on Martian soil, and witness the Red Planet’s beauty.",
      stay: "Mars Space Camp",
      price: "$1,200,000",
      image: pack2
    },
    {
      title: "Space Hotel Experience",
      duration: "Customizable",
      experience: "Stay in a futuristic space hotel orbiting Earth with breathtaking views of space.",
      stay: "Galactic Space Hotel",
      price: "$300,000",
      image: pack3
    },
    {
      title: "Jupiter Adventure Tour",
      duration: "15 Days",
      experience: "Fly close to Jupiter, observe its massive storms, and explore its largest moons.",
      stay: "Space Station near Jupiter",
      price: "$2,500,000",
      image: pack1
    }
  ];
  return (
    <div className="relative min-h-screen w-[100vw] bg-gray-900 text-white overflow-x-hidden">
      <Navbar/>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
        style={{ backgroundImage: `url(${HomeImage})` }}
      ></div>
      <Spaceman
          initial={{translateY:'400px',translateX:'100px',opacity:0}}
          animate={{translateY:0, translateX:0,opacity:1}}
          transition={{type:'spring',duration:2, delay:1}}
        >
          <img src={spaceman} alt="astronant" />
        </Spaceman>
      <div className="relative flex flex-col items-center justify-center min-h-screen z-1 mt-6 overflow-x-hidden">
        <div className="w-3/4 h-3/4 flex flex-col items-center justify-center overflow-x-hidden rounded-xl shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute w-3/4 h-3/4 bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            >
              <div className=" text-amber-500 px-6 py-3 rounded-md text-center" id="title">
                {slides[currentIndex].text}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Image Carousel & Related Text */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 px-6">
        
        {/* Left Side - Image Carousel */}
        <div className="w-[60%] lg:w-1/2 flex justify-center items-center relative">
          <div className="w-full h-[25rem] overflow-hidden rounded-xl shadow-lg relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-full h-full bg-cover bg-center rounded-xl flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundImage: `url(${slides1[currentIndex].image})` }}
              >
               <div className=" bg-opacity-50 px-6 py-3 rounded-md text-center">
                    <span className="text-white font-bold" style={{ textShadow: '0 0 20px white' }}>
                        {slides[currentIndex].text}
                    </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Related Text */}
        <div className="w-[90%] lg:w-1/2 text-center lg:text-left bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold underline mb-3">{carousal[currentIndex].title}</h2>
          <p className="text-lg text-gray-300">{carousal[currentIndex].description}</p>
        </div>
      </div> 
      <div className="bg-black min-h-screen p-10">
      <h1 className="text-white text-4xl font-bold text-center mb-10 animate-pulse">
        🚀 Explore Our Space Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={pkg.image} alt="package" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{pkg.title}</h2>
              <p className="text-sm text-gray-400">{pkg.duration}</p>
              <p className="text-sm mt-2">{pkg.experience}</p>
              <p className="text-sm text-gray-400 mt-2">Stay: {pkg.stay}</p>
              <p className="text-lg font-bold text-green-400 mt-2">{pkg.price}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md shadow-lg transform hover:scale-105 transition-all">
                View Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      {/* Footer */}
      <footer className="text-center text-white mt-10 py-6 bg-gray-900 border-t border-gray-700">
        <h5 className="text-lg font-semibold">Address: XYZ Galatic, Coastal Road, City</h5>
        <h5 className="text-lg font-semibold">Contact: +123 456 7890 | Email: info@galaticgateway.com</h5>
      </footer>
    </div>
  );
};

export default Home;
