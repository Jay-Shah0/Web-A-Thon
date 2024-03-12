import React, { useEffect } from 'react';
import Footer from "../Components/Home/footer"
import './Home.css';
import imageSrc from '../Utilities/tshirt.jpg';
import Navbar2 from '../Components/Home/navbar2';
import { Link } from 'react-router-dom';

const Main = () => {
  const text2 = "Design";
  const speed2 = 100;

  const typeWriter2 = () => {
    const element = document.getElementById("typewriter2");
    let i = 0;

    function type() {
      if (i < text2.length) {
        element.innerHTML += text2.charAt(i);
        i++;
        setTimeout(type, speed2);
      }
    }

    type();
  };

  const text = "T-shirt";
  const speed = 100; // Typing speed in milliseconds

  const typeWriter = () => {
    const element = document.getElementById("typewriter");
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  };

  useEffect(() => {
    typeWriter2();
    typeWriter();
  }, []); 

  return (
    <>
      <Navbar2 />

        <div className="circle">
          <svg width="116" height="137" viewBox="0 0 116 137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="47.5" cy="68.5" r="68.5" fill="#9D4CC2" fillOpacity="0.48"/>
          </svg>

        </div>

        
        <div className="Heading">
          <span className="design typewriter2-text" id="typewriter2"></span>
          <span className="tshirt typewriter-text"  id="typewriter"></span>
        </div>


        <div className="intro">
          <span className="intro1">Speed up your workflows with design tools and gain instant access to a ton of stunning illustrations, fonts, photos, icons, and textures</span>
        </div>
        <div className="squars">
          <svg width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="34" width="195" height="195" fill="#E84781" fillOpacity="0.4"/>
            <rect y="140" width="81" height="81" fill="#E84781" fillOpacity="0.4"/>
          </svg>

        </div>

        <div className="triangle">
          <svg width="280" height="251" viewBox="0 0 280 251" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112 125.5L284.5 16.8138L284.5 234.186L112 125.5Z" fill="#E84781" fillOpacity="0.4"/>
            <path d="M0 147.5L76.5 99.4356L76.5 195.564L0 147.5Z" fill="#E84781"/>
            <path d="M10 147.5L86.5 99.4356L86.5 195.564L10 147.5Z" fill="#E84781" fillOpacity="0.4"/>
            <path d="M136 201L178.75 174.153V227.847L136 201Z" fill="#9D4CC2"/>
            <path d="M142 201L184.75 174.153V227.847L142 201Z" fill="#9D4CC2" fillOpacity="0.4"/>
        </svg>

        </div>
        <div className="intro2"><span >Create Your <span id="own">Own</span></span></div>
        <Link to="http://localhost:5173/"><button className='start'>Start Design</button></Link>
      <div className='Our_design'>
      <div className="design1">
        <h1 id="design">Our Designs ...</h1>
      </div>
          <div className="img_list">
            <div className='cir'></div>
            <div className='cir'></div>
            <img src={imageSrc} alt="Jay Shah" className="img_item" />
            <img src={imageSrc} alt="Jay Shah" className="img_item" />
            <img src={imageSrc} alt="Jay Shah" className="img_item" />
            <img src={imageSrc} alt="Jay Shah" className="img_item" />
            <div className='cir'></div>
            <div className='cir'></div>            
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
