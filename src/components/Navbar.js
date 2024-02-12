import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg  ">
  <div className="container">
    <a className="logo" href="#" data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">Sam
    <img src='./assets/logo1.jpg' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="linear">
        <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item" data-aos="fade-down" data-aos-duration="1200"  data-aos-easing="linear">
        <Link to="/membership" className="nav-link" aria-current="page">Membership</Link>
        </li>
        <li className="nav-item" data-aos="fade-down" data-aos-duration="1400"  data-aos-easing="linear">
          <Link to="/training" className="nav-link" aria-current="page">Personal Training</Link>
        </li>
        <li className="nav-item" data-aos="fade-down" data-aos-duration="1600"  data-aos-easing="linear">
          <Link to="/contact" className="nav-link" aria-current="page">ContactUs</Link>
        </li>
    
      </ul>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
