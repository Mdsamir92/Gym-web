import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  
  return (
    <div className='container row mt-3  contact-profile'>
      <div className='container col-md-5 contact-profile ' data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <img  src='./assets/samir.jpg'/>
     </div>
<div className=' contact-heading container col-md-6' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
<h2>Hi I'm Mohammad Samir</h2>
<h4>Welcome to my Gym.</h4>
<p>we are always ready to hear from you
our team is always ready to hear from you. we make it a point to respond within 24 hours.</p>
<h2>TAKE YOUR FITNESS TO THE NEXT LEVEL WITH OUR CERTIFIED PERSONAL TRAINERS.</h2>
</div>
 {/*  */}
 <div className='container text-center col-md-5 mt-4 contact-profile' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
   <h3 >Gym Location</h3>
      <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8598836045694!2d88.29019411443356!3d22.546920939596063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279a4f4de010d%3A0x30e59320ebc2678a!2sDream%20Palace!5e0!3m2!1sen!2sin!4v1660218723995!5m2!1sen!2sin"
        width="100%" height="450" style={{ border: 0 }}
        allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
     </div>

     <div className='contact-form col-md-5 mt-4 '>
        <h3 className='text-center'> Send your details</h3>
        <div className='form-container'>
        <form action="https://formspree.io/f/xeqdqalv" method="POST" >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" name ="name" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)}  required autoComplete='off'/> 
          </div>
          <div className="mb-3">
            <label className="form-label"  >Email address</label>
            <input type="email" className="form-control" name ="email" placeholder='Enter email...' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off'  />
          </div>
          <div className="mb-3" >
            <label className="form-label">Phone </label>
            <input type="number" className="form-control" name ="phone" placeholder='Enter number...' value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete='off'  />
          </div>
      
          <button type="submit" className="btn btn-warning">Submit</button>
        </form>
       
      </div>
      
    </div>
 

    </div>
  
  )
}

export default Contact
