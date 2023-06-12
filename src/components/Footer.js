
import React from "react";
import '../components/about.css';

import { Slide, Fade } from "react-awesome-reveal";
import { Container, Form } from 'react-bootstrap';
import '../components/about.css';
import face from '../Assets/facebook-box-fill.svg';
import insta from '../Assets/instagram-line.svg';
import git from '../Assets/github-line.svg';
import link from '../Assets/linkedin-box-fill.svg';
import mail from '../Assets/mail-fill.svg';
import message from '../Assets/message-3-fill.svg';
import phone from '../Assets/phone-fill.svg';
import user from '../Assets/user-fill.svg';

const Footer = () => {

    return (
        <div className="backcolor p-lg-5" id="Portfolio">


            <Container id="footer" >
                <div className="text-white text-center">
                    <Slide direction="left" delay={1}>
                        <h1 style={{ fontSize: '50px' }} >Portfolio</h1>
                    </Slide>
                </div>
                <div className="d-lg-flex justify-content-between">


                    <div className="col-lg-6 col-md-6 col-sm-6 px-lg-4 text-white text-left my-lg-5 py-lg-5">


                        <div className="address  ">
                            <Slide direction="left">
                                <h1>Address:</h1>
                            </Slide>
                            <Slide direction="left">
                                <p>Mysore-570008 ,Karnataka , India </p>
                            </Slide>
                        </div>
                        <div className="links address">
                            <Slide direction="left">
                                <h1>Contact me directly:</h1>
                            </Slide>
                            <div>

                                <Slide direction="left">

                                    <p> <img src={phone} style={{ width: '20px' }} />  Phone Number: 8892324910</p>
                                </Slide>
                            </div>
                            <div>

                                <Slide>
                                    <p> <img src={mail} style={{ width: '20px' }} />    Email: shreeshakthy.46@gmail.com</p>

                                </Slide>
                            </div>



                        </div>

                        <Fade>
                            <p className="d-flex justify-content-start">
                                <img src={face} style={{ width: '30px' }} />
                                <img src={insta} style={{ width: '30px' }} />
                                <img src={git} style={{ width: '30px' }} />
                                <img src={link} style={{ width: '30px' }} />
                            </p>

                        </Fade>

                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-5 py-lg-5">

                        <Form>
                            <Slide direction="left">
                                <form>
                                    <div className="name text-white address">

                                        <img src={user} style={{ width: '25px' }} /> FULLNAME
                                        <input type="text" placeholder="Fullname..." className="fullname pylg-2" />
                                    </div>
                                    <div className="email py-lg-4 text-white address">
                                        <img src={mail} style={{ width: '25px' }} /> EMAIL
                                        <input type="email" placeholder="Email..." className="fullname" />
                                    </div>
                                    <div className="message text-white address">
                                        <img src={message} style={{ width: '25px' }} /> MESSAGE
                                        <textarea cols="30" rows="10" placeholder="Message..." className="message"></textarea>
                                    </div>
                                    <button className="homebtn">Submit</button>
                                </form>
                            </Slide>
                        </Form>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Footer