import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Container } from 'react-bootstrap';
import '../components/about.css';
import img from '../Assets/Saly-22.png'



const About = () => {
  return (
    <div className=' py-lg-5 backcolor  '  id='Home'>
      <Container id="Home" >
        <div className='row'>
        <div className=' col-lg-5 d-lg-flex justify-content-center'>
          <Slide direction="left">
            <div className='my-lg-5 aboutmain text-white '>
              <h4>
                Hello <span className="green">I'am</span>
              </h4>
              <h1 className="green">Shre Shakthy</h1>
              <h3>Front End Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,<br />
                iusto. Adipisci in qui officia provident tenetur sequi, deserunt
                corporis quos?
              </p>
              {/* <button className='homebtn'>Let's talk</button> */}
              <div className='profile-option'>
                       
                        <a href="Shree shakthy Resume.pdf" download="Shree shakthy Resume.pdf">

                        <button className=" homebtn">Get Resume </button>
                        </a>

                    </div>
              <div>
                {/* <p className='my-lg-2'>Check out my</p> */}
                {/* <div  >
                  <a href='#' className='px-lg-1 '>
                    <i className='fa fa-facebook-square'></i>
                  </a>
                  <a href='#' className='px-lg-1'>
                    <i className='fa fa-google-plus-square'></i>
                  </a>
                  <a href='#' className='px-lg-1'>
                    <i className='fa fa-instagram'></i>
                  </a>
                  <a href='#' className='px-lg-1'>
                    <i className='fa fa-youtube-square'></i>
                  </a>
                  <a href='#' className='px-lg-1'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </div> */}
              </div>
            </div>
          </Slide>
        </div>


        <div className='col-lg-5 ms-auto my-lg-5' >
          <Slide direction="left">
            <img src={img} className='img1' />
          </Slide>
        </div>
        </div>
      </Container>


    </div>
  )
}

export default About