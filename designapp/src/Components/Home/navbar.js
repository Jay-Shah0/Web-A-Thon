import React from 'react'
import  "./navbar.css";

const navbar = () => {
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <svg width="45" height="59" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.56 8.12H5.16L14.88 25.32L24.56 8.12H26.04V35.96H3.56V8.12ZM5.04 34.52H24.56V11.12L15.56 26.96H14.16L5.04 10.88V34.52Z" fill="#9D4CC2"/>
            <path d="M29.56 8.12H31.16L40.88 25.32L50.56 8.12H52.04V35.96H29.56V8.12ZM31.04 34.52H50.56V11.12L41.56 26.96H40.16L31.04 10.88V34.52Z" fill="#E84781"/>
            <path d="M27.8 65V37.16H38.16C40.1867 37.16 42.0533 37.6667 43.76 38.68C45.4933 39.6933 46.8667 41.0667 47.88 42.8C48.8933 44.5067 49.4 46.3733 49.4 48.4V53.76C49.4 55.7867 48.8933 57.6667 47.88 59.4C46.8667 61.1067 45.4933 62.4667 43.76 63.48C42.0533 64.4933 40.1867 65 38.16 65H27.8Z" fill="#9D4CC2"/>
            <path d="M27.2 65V37.16H16.84C14.8133 37.16 12.9467 37.6667 11.24 38.68C9.50666 39.6933 8.13333 41.0667 7.12 42.8C6.10667 44.5067 5.6 46.3733 5.6 48.4V53.76C5.6 55.7867 6.10667 57.6667 7.12 59.4C8.13333 61.1067 9.50666 62.4667 11.24 63.48C12.9467 64.4933 14.8133 65 16.84 65H27.2Z" fill="#E84781"/>
          </svg>
        </div>

        <ul className="lists">
          <li className='list'>Templets</li>
          <li className='list'>T-shirts</li>
          <li className='list'>Use AI</li>
        </ul>

        <div className="space"></div>

        <div className="search">
          <svg width="20" height="20" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0C13.467 0 0 13.467 0 30C0 46.533 13.467 60 30 60C37.1895 60 43.7922 57.447 48.9668 53.209L66.8789 71.1211C67.1553 71.409 67.4864 71.6389 67.8528 71.7972C68.2192 71.9556 68.6135 72.0393 69.0126 72.0433C69.4118 72.0474 69.8077 71.9718 70.1772 71.8209C70.5468 71.67 70.8825 71.447 71.1647 71.1647C71.447 70.8825 71.67 70.5468 71.8209 70.1772C71.9718 69.8077 72.0474 69.4118 72.0433 69.0126C72.0393 68.6135 71.9556 68.2192 71.7972 67.8528C71.6389 67.4864 71.409 67.1553 71.1211 66.8789L53.209 48.9668C57.447 43.7922 60 37.1895 60 30C60 13.467 46.533 0 30 0ZM30 6C43.2904 6 54 16.7096 54 30C54 43.2904 43.2904 54 30 54C16.7096 54 6 43.2904 6 30C6 16.7096 16.7096 6 30 6Z" fill="white"/>
          </svg>
        </div>

    
        <ul className='sign_lists'>
          
          <li className='sign_list'> 
            <button className="sign" id='sign_in'>
              <span className='sign_text'>Sign In</span>
            </button>
          </li>

          <li className='sign_list' >
            <button className="sign" id='sign_up'>
              <span className='sign_text'>Sign Up</span>
            </button>
          </li>

        </ul>
      </nav>




      <div className="page1">
        
      </div>
    </>
  )

}

export default navbar