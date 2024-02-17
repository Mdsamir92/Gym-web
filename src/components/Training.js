import React from 'react'


function Training() {
    return (
        <div>

            <div className="training">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" >
                    <img src="./assets/Personal-Trainer.webp" />
                </div>

            </div>

            <div class="text-center mt-5" data-aos="fade-down" data-aos-duration="1000"  data-aos-easing="linear">
                <h1>About Us</h1>
            </div>
            <div class="about">

                <div class="about-child" data-aos="flip-up" data-aos-duration="1200"  data-aos-easing="linear">
                    <h1>💕</h1>
                    <h2>1000+</h2>
                    <p>Happy Members</p>
                </div>
                <div class="about-child" data-aos="flip-up" data-aos-duration="1200"  data-aos-easing="linear">
                    <h1>🎊</h1>
                    <h2>100+</h2>
                    <p>Certified Trainers</p>
                </div>
                <div class="about-child" data-aos="flip-up" data-aos-duration="1200"  data-aos-easing="linear">
                    <h1>🏆</h1>
                    <h2>100%</h2>
                    <p>Results</p>
                </div>
                <div class="about-child" data-aos="flip-up" data-aos-duration="1200"  data-aos-easing="linear">
                    <h2>📞</h2>
                    <h1>24 X 7</h1>
                    <p>Technical Support</p>
                </div>
            </div>

            <div className='trainer container text-center col-md-6 mt-3' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" >
                <h2>TAKE YOUR FITNESS TO THE NEXT LEVEL WITH OUR CERTIFIED PERSONAL TRAINERS.</h2>
            </div>

            <div className='container trainer mt-3 text-center row youtube' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" >


                <div className='col-md-6'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D-ToOMXw8lM?si=Jg7lZ4LjK7LwWoRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='col-md-6'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/E8RfEkP7RnA?si=qHMKQBxmlYDuvbRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            <div className='row container home-sec-2 ' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className='container col-md-4 section-img2'  >
                    <img height={300} src='./assets/hulk.webp' />
                </div>
                <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h3>READY TO BEGIN YOUR FITNESS JOURNEY?</h3>
                    <p>At <span>Sam</span> Gym, we believe in empowering your fitness journey with our internationally certified personal trainers, state-of-the-art equipment, and a welcoming environment. Our newly renovated 10,000 Sq. Ft. gym floor is equipped with top-tier brands like Life Fitness, Nautilus, Cybex, and Matrix, ensuring a premium workout experience.</p>
                </div>

            </div>


            {/*  */}

            <div className='row container mt-2  home-sec-2'>

                <div className='col-md-4 img-text' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"  >
                    <h3>DISCOVER PERSONALIZED FITNESS AT SAM GYM</h3>
                    <p>At <span>Sam</span> Your fitness journey is unique. That’s why at  Gym, our internationally certified trainers craft a personal training program tailored just for you. Accelerate your fitness and weight loss goals with our expert blend of cardio, strength training, and the latest in fitness technology..</p>
                    {/* <h5>Specialized Programs:</h5> Our trainers are skilled in Special Population Training, offering services for diverse fitness needs */}
                </div>
                <div className='container col-md-4 section-img2' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <img height={500} width={400} src='./assets/training1.jpg' />
                </div>
            </div>

        </div>
    )
}

export default Training
