import React,{useState} from 'react'
import Testimonial from './Testimonial'
import "./Contact.css"

function Membership() {
  const [name, setName] = useState("");
  const [plan,setPlan] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className='container'>
    <div className=' row  p-3  best-plan' data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear">
    <h2  data-aos="flip-down" data-aos-duration="1000" data-aos-easing="linear">Choose Our popular Plan.!</h2>

    <div className='container col-md-3 p-3 card mt-2' >
    <h3>Pakage</h3>
    <div className=' d-flex '>
    <h1>💲500</h1><span><sub>/per months</sub></span>
    </div>
    <p>✔ Diet PLAN</p>
    <p>✔ 4 classes per week</p>
    <p>❌Steam Bath</p>
    <p>✔ E-book fitness guide</p>
    <button className='btn btn-warning'>choose plan</button>   
    </div>
   
    <div className='container col-md-3 mt-2 p-3 card'>
    <h3>Pakage</h3>
    <div className='d-flex '>
    <h1>💲1000</h1><span><sub>/per months</sub></span>
    </div>
    <p>✔ Diet PLAN</p>
    <p>✔ 5 classes per week</p>
    <p>❌Steam Bath</p>
    <p>✔ E-book fitness guide</p>
    <button className='btn btn-warning'>choose plan</button>
    </div>

    <div className='container col-md-3  mt-2  p-3 card' >
    <h3>Pakage</h3>
    <div className='d-flex '>
    <h1>💲2000</h1><span><sub>/per months</sub></span>
    </div>
    <p>✔ Diet PLAN</p>
    <p>✔ 6 classes per week</p>
    <p>✔ Steam Bath</p>
    <p>✔ E-book fitness guide</p>
       <button className='btn btn-warning'>choose plan</button>
    </div>
    <br/>


      <Testimonial/>

    </div>

        <div className=' choose-plan container col-md-6' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <h3 className='text-center'> Choose Your Plans</h3>
        <div className='form-container'>
        <form action="https://formspree.io/f/xeqdqalv" method="POST" >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" name ="name" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)}  required autoComplete='off'/> 
          </div>
          <div className="mb-3">
            <label className="form-label">Plan</label>
            <input type="email" className="form-control" name ="plan" placeholder='Enter plan...' value={plan} onChange={(e) => setPlan(e.target.value)} required autoComplete='off'  />
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

export default Membership
