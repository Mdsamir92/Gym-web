import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <div className='row mt-4 px-3 py-3 footer'>
    <div className='col-md-2'>
        <div className='footer-col'>
            <h5>Quick links</h5>
            <ul>
                <li>
                    <a href='#'>About Us</a>
                </li>
                <li>
                    <a href='#'>Our events</a>
                </li>
                <li>
                    <a href='#'>Press room</a>
                </li>
                <li>
                    <a href='#'>Why us</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='col-md-2'>
    <div className='footer-col'>
            <h5>Quick links</h5>
            <ul>
                <li>
                    <a href='#'>Gym locator</a>
                </li>
                <li>
                    <a href='#'>Careers</a>
                </li>
                <li>
                    <a href='#'>Parternship</a>
                </li>
                <li>
                    <a href='#'>Security</a>
                </li>
            </ul>
        </div>

    </div>
    <div className='col-md-2'>
    <div className='footer-col'>
            <h5>Quick links</h5>
            <ul>
                <li>
                    <a href='#'>Blog</a>
                </li>
                <li>
                    <a href='#'>Sponsership</a>
                </li>
                <li>
                    <a href='#'>Collaborate</a>
                </li>
                <li>
                    <a href='#'>Program</a>
                </li>
            </ul>
        </div>
    </div>
    <div className='col-md-3'>
    <div className='footer-col'>
            <h5>Contact Us</h5>
            <div className='footer-icons'>
            <ul>
                <li><a href="mailto:mdsamir13968@gmail.com">mdsamir13968@<i className="fa-regular fa-envelope"></i>.com</a></li>
           <li>+91 8910467866 <i className="fa-solid fa-phone "></i> </li>
           <li>Metiabruz,Kolkata 700024 <i className="fa-solid fa-location"></i></li>
           
            </ul>
            </div>
         
        </div>
    </div>
    <div className='col-md-3'>
    <div className='footer-col-last'>
    <p>Subscribe Our Newsletter</p>
  
    <input type="email" placeholder='Enter your email...' required/><i className="fa-solid fa-paper-plane"></i>
</div>

   </div>

<div className='container mt-3 row text-center '>

<div className='col-md-3 footer-logo'>
<img src='./assets/logo1.jpg' height={30}/> 
    
</div>
    <div className='col-md-6 footer-sam' >
      
      <p>All rights reserved! ||  <span>Md Samir</span> || &copy;copyright 2024  </p>
    </div>
    <div className="col-md-3 social-icons">
    
        <a href="#"><i class="fa-brands fa-facebook"></i> </a>
        <a href="https://www.instagram.com/md_samir92"><i class="fa-brands fa-instagram"></i> </a>
        <a href="#"><i class="fa-brands fa-linkedin"></i> </a>
        <a href='https://www.youtube.com/channel/UCp5waAFnrZKIJSANfNuYvzw'><i class="fa-brands fa-youtube"></i> </a>
    </div>
</div>


    </div>
  )
}

export default Footer