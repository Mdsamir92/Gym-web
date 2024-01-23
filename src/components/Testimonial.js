import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';

function Testimonial() {
    return (
        <div className='container-fluids testimonial mt-4'>
            <div className='container row'>
                <div className='col-md-6' >
                    <div className='testimonial1 mt-3'>
                    <h1 data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">Choose the best plan</h1>
                    <p>Our trainers are skilled in Special Population Training, offering services for diverse fitness needs</p>
                 <div className='container row'>
                    <div className='col-md-6 '>
                    <div className='test-img d-flex'>
                    <img src='https://www.shutterstock.com/image-photo/portrait-handsome-young-muscular-middle-260nw-2075626996.jpg'  className='img-fluid'/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0-lvZtShJD_GcBI1IWKMJGH9q5QFDMMf4E_1HAAeYamW86rV2pJ9e7DyjkLHZjEBss8&usqp=CAU'  className='img-fluid'/>
                    <img src='https://t4.ftcdn.net/jpg/06/28/95/63/360_F_628956319_rfUBd6WhCgPHanM7QEwBd0sacXVhMlJY.jpg'  className='img-fluid'/>
                    <img src='https://media.gq-magazine.co.uk/photos/5d13a2427fcc8ee6ed820a61/16:9/w_2560%2Cc_limit/Man-in-the-gym-GQ-17May16_istock_b.jpg'  className='img-fluid'/>
                   <span>➕500 reviews  </span>
                   </div>
                    </div>
                
                 </div>
                  
                     </div>
                </div>


              

                <div className='col-md-6'>
                    <div className='testimonial2 mt-3'>
                        <Swiper grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                             
                                next: {
                                    translate: ["100%", 0, 0],
                                },


                            }}
                            autoplay={{
                                    delay:1000,
                                    disableOnInteraction:false,
                                }}
                            modules={[Autoplay ,EffectCreative]}
                            className="mySwiper">

                              <SwiperSlide>
                                <div className='row test'>
                                    <div className='col-12'>
                                        <div className='row gx-0 '>
                                            <div className='col-md-5'>
                                                <img src="./assets/salman-khan.jpg" />
                                                <div className='stars'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-regular fa-star'></i>
                                                </div>
                                            </div>

                                            <div className='col-md-6 testimonial-text'>
                                                <h5>Salman khan</h5>
                                                <p>Gym is superb..</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='row test'>
                                    <div className='col-12'>
                                        <div className='row gx-0 '>
                                            <div className='col-md-5'>
                                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjIn4t-PUZ3xbF6QaW0QQwU8zZDF2wPu5TGjwCAAyyO0lxS3AC" />
                                                <div className='stars'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-regular fa-star'></i>
                                                </div>
                                            </div>

                                            <div className='col-md-6 testimonial-text'>
                                                <h5>Sergi constance</h5>
                                                <p>Your gym is  outstanding..</p>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>               
                            <SwiperSlide>
                                <div className='row test'>
                                    <div className='col-12'>
                                        <div className='row gx-0 '>
                                            <div className='col-md-5'>
                                                <img src="https://c4.wallpaperflare.com/wallpaper/700/334/546/bodybuilder-dwayne-johnson-tattoos-5k-wallpaper-preview.jpg" />
                                                <div className='stars'>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-solid fa-star'></i>
                                                    <i className='fa-regular fa-star'></i>
                                                </div>
                                            </div>

                                            <div className='col-md-6 testimonial-text'>
                                                <h5>The rock</h5>
                                                <p>Your gym is mindblowing the gym trainer is outstanding..</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                       
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonial