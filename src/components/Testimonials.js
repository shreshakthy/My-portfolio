import React from 'react';

// import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/testimonal.css';
import star from '../Assets/star-fill.svg';
import test1 from '../Assets/test1.png';
import test2 from '../Assets/test2.png';
import test3 from '../Assets/test3.png';
import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
    return (
        <div id='Testimonials'>
            <div className='container '>
                <h1 className='testimonal text-left p-lg-5'>Testimonals</h1>

                <div className="carousel-wrapper p-lg-5  d-lg-flex justify-content-center gap-5">


                    <div>
                    <Slide direction="left">
                        <div className="card maincard " >
                            <span> <img src={test1} className="test" /></span>

                            <div className="card-body">
                                <h5 className="card-title cardtitle text-center">Jessica John</h5>
                                <p className="card-text cardtxt text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut rutrum ante tempor sagittis auctor. Curabitur ultricies aliquam urna, nec commodo felis vestibulum et.
                                    Aliquam tempor eu odio eget euismod. Curabitur venenatis finibus lacus, in tincidunt lectus tincidunt ac.
                                   </p>
                                <p className='d-flex justify-content-center'>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                </p>



                            </div>

                        </div>
                        </Slide>
                    </div>

                    <Slide direction="down">
                    <div className='my-lg-5 py-lg-3'>
                        <div className="card  maincard" >
                            <img src={test2} className="test " />
                            <div className="card-body">
                                <h5 className="card-title cardtitle text-center">victoria A M</h5>
                                <p className="card-text cardtxt text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut rutrum ante tempor sagittis auctor. Curabitur ultricies aliquam urna, nec commodo felis vestibulum et.
                                    Aliquam tempor eu odio eget euismod. Curabitur venenatis finibus lacus, in tincidunt lectus tincidunt ac.
                                   </p>
                                <p className='d-flex justify-content-center'>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                </p>



                            </div>
                        </div>

                    </div>
                    </Slide>

                    <div>
                    <Slide direction="left">
                        <div className="card  maincard" >
                            <img src={test3} className="test" />
                            <div className="card-body">
                                <h5 className="card-title cardtitle text-center">Riya Christopher</h5>
                                <p className="card-text cardtxt text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut rutrum ante tempor sagittis auctor. Curabitur ultricies aliquam urna, nec commodo felis vestibulum et.
                                    Aliquam tempor eu odio eget euismod. Curabitur venenatis finibus lacus, in tincidunt lectus tincidunt ac.
                                   </p>
                                <p className='d-flex justify-content-center'>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                    <span><img src={star} className='star' /></span>
                                </p>



                            </div>
                        </div>
                       </Slide>
                    </div>



                </div>

            </div >






        </div>
    )
}

export default Testimonials