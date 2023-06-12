import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/about.css';


const Navbars = () => {
  return (
    <div>
   
   <div >
        <Container fluid>
          <Navbar variant='white' expand="lg" className='mainnav bg-white text-black backcolor' fixed="top"  id='navscroll' >
            <Container className='navh' >
              <Navbar.Brand ><p className=' furniture fw-bolder my-lg-1 text-black  px-lg-4'>Portfolio</p></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav " />
              <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-center' >
                <div className=' ms-lg-auto'>
                  <Nav className="mx-md-5 gap-5 ms-auto navtext">

                    <Nav.Link  href="#Home"><p className=' my-md-1 text-black fw-bold'>Home</p></Nav.Link>
                    <Nav.Link href="#Service"><p className='  my-md-1 text-black fw-bold '>Services</p></Nav.Link>
                    <Nav.Link href="#Projects"><p className='  my-md-1  text-black fw-bold'>Projects</p></Nav.Link>
                    <Nav.Link href="#Testimonials"><p className='  my-md-1 text-black fw-bold '>Testimonials</p></Nav.Link>
                    <Nav.Link href="#Portfolio"><p className='  my-md-1 text-black fw-bold '>Portfolio</p></Nav.Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>





    </div>
  )
}

export default Navbars