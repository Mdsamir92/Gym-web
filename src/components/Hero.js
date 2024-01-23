import React, { useState, useEffect } from 'react'
import { Img } from './HeroImg';
import "./Hero.css";
import Cards from './Cards';


function Hero() {


  const [activeImg, setActiveImg] = useState(0);


  const handlePrevClick = () => {
  
    setActiveImg((activeImg - 1 + Img.length) % Img.length);
  
  }

  const handleNextClick = () => {
    setActiveImg((activeImg + 1) % Img.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImg]);



  return (


    <div>

      <div className="home " data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
      <button className='slider-l' onClick={handlePrevClick}>&lt;</button>
        <img  src={Img[activeImg]} alt="wallpaper" />
        <button className='slider-r' onClick={handleNextClick} >&gt;</button>
      </div>


      <div className=' row  working-time'  data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <div className='col-md-3 card pt-3 container '>
          <i className="fa-regular fa-clock"></i>
          <p style={{ fontWeight: "bold" }}>8.00 am - 11-pm</p>
          <p>Workout time</p>
        </div>

        <div className='col-md-3 card pt-3 container'>
          <i className="fa-solid fa-phone"></i>
          <p style={{ fontWeight: "bold" }}>Phone Number</p>
          <p>+91 8910467866 </p>
        </div>

        <div className='col-md-3 card pt-3 container'>
          <i className="fa-solid fa-location-dot"></i>
          <p style={{ fontWeight: "bold" }}>Location</p>
          <p>Kolkata</p>
        </div>
      </div>

      <div className='container row text-center '>
      <h3 className='container'  data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-in-out">Motivational videos</h3>
      {/* <div className='container  col-md-4' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <video src="./assets/sam-video.mp4" type="video/mp4" controls loop muted poster='./assets/sam-gym.png'></video>
      </div> */}
      <div className='container  col-md-4' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <video src="./assets/therock.mp4" type="video/mp4" controls loop muted poster='./assets/sergi.jpg'></video>
      </div>
      <div className='container  col-md-4' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
        <video src="./assets/gym-video.mp4" type="video/mp4" controls loop muted poster='./assets/Andrei-Deiu.jpeg'></video>
      </div>
     
     
      </div>


      <div className='container row youtube'>

        <div className='col-md-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oVJ9aJhodVg?si=nuK37Z56V-oXB9B1" title="YouTube video player" frameborder ="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='col-md-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zujqLN3jdHA?si=1b_eDyTor2Bq7XHK" title="YouTube video player" frameborder ="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='col-md-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eaRQF-7hhmo?si=lqNhYKCAz9IHpq26" title="YouTube video player" frameborder ="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='col-md-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3-06gJotbHc?si=KZi0N2ewKdTQS33c" title="YouTube video player" frameborder ="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>

      <div className='row container home-sec-2'>
        <div className='container col-md-4 section-img' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <img height={500} src='./assets/rock.jpg' />
        </div>
        <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <h3>READY TO BEGIN YOUR FITNESS JOURNEY?</h3>
          <p>At <span>Sam</span> Gym, we believe in empowering your fitness journey with our internationally certified personal trainers, state-of-the-art equipment, and a welcoming environment. Our newly renovated 10,000 Sq. Ft. gym floor is equipped with top-tier brands like Life Fitness, Nautilus, Cybex, and Matrix, ensuring a premium workout experience.</p>
        </div>

      </div>

      <div className='row container mt-4  home-sec-2'>

        <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <h3>Diverse Workouts for Every Fitness Level</h3>
          <p>At <span>Sam</span> Gym, Whether you’re a beginner or a fitness enthusiast, our over 150 group fitness classes, including Yoga, Zumba, Tabata, and Kickboxing, cater to every preference. Dive into our High-Intensity Interval Training (HIIT) for strength and stamina, or challenge yourself in our 1500 Sq. Ft. outdoor CrossFit area, TRX bands, and more.</p>
        </div>
        <div className='container col-md-4 fire-builder' data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <img height={500} width={400} src='./assets/fire-builder.jpg' />
        </div>


      </div>

      <Cards />



    </div>

  )
}

export default Hero