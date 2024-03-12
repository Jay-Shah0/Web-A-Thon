import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="box1">
        <div className="image">
          <svg width="350" height="300" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.56 8.12H5.16L14.88 25.32L24.56 8.12H26.04V35.96H3.56V8.12ZM5.04 34.52H24.56V11.12L15.56 26.96H14.16L5.04 10.88V34.52Z" fill="#9D4CC2"/>
            <path d="M29.56 8.12H31.16L40.88 25.32L50.56 8.12H52.04V35.96H29.56V8.12ZM31.04 34.52H50.56V11.12L41.56 26.96H40.16L31.04 10.88V34.52Z" fill="#E84781"/>
            <path d="M27.8 65V37.16H38.16C40.1867 37.16 42.0533 37.6667 43.76 38.68C45.4933 39.6933 46.8667 41.0667 47.88 42.8C48.8933 44.5067 49.4 46.3733 49.4 48.4V53.76C49.4 55.7867 48.8933 57.6667 47.88 59.4C46.8667 61.1067 45.4933 62.4667 43.76 63.48C42.0533 64.4933 40.1867 65 38.16 65H27.8Z" fill="#9D4CC2"/>
            <path d="M27.2 65V37.16H16.84C14.8133 37.16 12.9467 37.6667 11.24 38.68C9.50666 39.6933 8.13333 41.0667 7.12 42.8C6.10667 44.5067 5.6 46.3733 5.6 48.4V53.76C5.6 55.7867 6.10667 57.6667 7.12 59.4C8.13333 61.1067 9.50666 62.4667 11.24 63.48C12.9467 64.4933 14.8133 65 16.84 65H27.2Z" fill="#E84781"/>
          </svg>
        </div>
        <div className="te">
           MMDD<br /> Ichchhanath, Surat-395007, Gujarat, INDIA
        </div>
      </div>
      <div className='box2'>
        <div className="li">
          <span>Quick Links</span>
        </div>
        <div className="l1">
          <ul>
            <li>About Us:</li>
            <li>Gallery</li>
            <li>Signin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
