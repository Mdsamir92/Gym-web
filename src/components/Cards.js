import React from 'react'

function Cards() {
  return (
    <div className=' container  Bestoffers mt-5'>
    <div className='container text-center main-heading'>
 <h1  data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">Get Ready  to Reach <br/> Your Fitness Goals</h1>
    </div>
   
<div className='row container  p-3'  data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-in-out">
    <div className='container text-center card col-md-3 p-3 '>
    <i className="fa-solid fa-dumbbell"></i>
    <h5>Strength Training</h5>
    <p> our trainers will design that a progresive workout</p>
    <p>Learn more !.</p>
    </div>

    <div className='container text-center card col-md-3 p-3 '>
    <i className="fa-solid fa-dumbbell"></i>
    
    <h5>Weight Gain</h5>
    <p> eat smaller meals more often, 
    adding healthy snacks between meals.</p>
    <p>Learn more !.</p>
    </div>

    <div className='container text-center card col-md-3 p-3'>
    <i className="fa-solid fa-dumbbell"></i>
    <h5>Weight Loss</h5>
    <p> Our eating habits are sometimes connected to our emotions</p>
    <p>Learn more !.</p>
    </div>
  

</div>
  

    </div>
  )
}

export default Cards