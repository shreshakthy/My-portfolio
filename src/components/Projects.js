import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



import '../components/about.css';
import img4 from "../Assets/academy.png";
import img5 from "../Assets/simpleweb.png";
import img6 from "../Assets/homedecor.png";
import { Slide } from 'react-awesome-reveal';



const Projects = () => {
    return (
        <div className='backcolor p-lg-5' id='Projects'>
            <div className='project'>
                <h1 className='text-white text-left container 'style={{fontSize:'50px'}}>Projects</h1>
                <div className='container '>

                    <div className="carousel-wrapper p-lg-5 d-lg-flex justify-content-center gap-5">


                        <div >
                            <Slide direction="left">
                                <div className="card projectcard " >
                                    <div className='d-flex justify-content-center'>
                                        <img src={img4} className="projectcardimg py-lg-3" />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title text-center">Academy Project</h5>
                                        <p className="card-text text-center">Academy Project is done using HTML,CSS, and Bootstrap.</p>
                                        <div className='d-flex justify-content-center'>
                                            <span className='px-lg-3 '>
                                                <a href="https://shreshakthy.github.io/Academy/" className="btn btn-primary  ">Demo</a>
                                            </span>

                                            <span>
                                                <a href="https://github.com/shreshakthy/Academy" className="btn btn-primary ">Code</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                        </div>


                        <Slide direction="left">
                            <div className='my-lg-5 projectcard '>
                                <div className="card d-flex justify-content-center" >
                                    <div className='d-flex justify-content-center'>
                                        <img src={img5} className="projectcardimg py-lg-3 " alt="..." />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title text-center projecttitle">Simple Web Page</h5>
                                        <p className="card-text text-center projectbody">Simple Web Page is done using HTML,CSS, and Bootstrap.</p>
                                        <div className='d-flex justify-content-center'>
                                            <span className='px-lg-3 '>
                                                <a href="https://shreshakthy.github.io/Simplewebpage/" className="btn btn-primary  ">Demo</a>
                                            </span>

                                            <span>
                                                <a href="https://github.com/shreshakthy/Simplewebpage" className="btn btn-primary ">Code</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Slide>



                        <Slide direction="left">

                            <div className='projectcard '>
                                <div className="card d-flex justify-content-center" >
                                    <div className='d-flex justify-content-center'>
                                        <img src={img6} className="projectcardimg py-lg-3" alt="..." />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title text-center">Home Decor Project</h5>
                                        <p className="card-text text-center">Home Decor Projectis done using HTML,CSS,React.js and  React-Bootstrap.</p>
                                        <div className='d-flex justify-content-center'>
                                            <span className='px-lg-3 '>
                                                <a href="https://shreshakthy.github.io/Homedecor/" className="btn btn-primary  ">Demo</a>
                                            </span>

                                            <span>
                                                <a href="https://github.com/shreshakthy/Homedecor" className="btn btn-primary ">Code</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Slide>


                    </div>

                </div >

            </div>


        </div >
    )
}

export default Projects
