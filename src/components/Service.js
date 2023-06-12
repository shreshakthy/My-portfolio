import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Container } from 'react-bootstrap';
import Cards1 from './Cards1';
import './service.css';
import img1 from '../Assets/front.jpg';
import img2 from '../Assets/web.jpg';
import img3 from '../Assets/res1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Service = () => {
    return (
        <div id="Service" className=' text-black p-lg-5 service'>
          
            <Container>
                <Slide direction="down">
                    <h1 >
                        My <span className="green" style={{fontSize:'50px'}}>services</span>
                    </h1>
                    <h2>What I Do</h2>
                </Slide>


                <Slide direction="left">
                <div className=' my-lg-3 d-lg-flex gap-5 justify-content-center container text-black  cards1' >
                    {data.map((item, index) => (<Cards1 data={item} key={index} />)
                    )}
                </div>
                </Slide>

                
               
            </Container>
            
        </div>
    )
}

export default Service
const data = [{
     icon:img1,
    title:"Front End Designer",
    disc: "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem",


},
{
    icon:img2,
    title:"Web Application",
    disc: "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem",

},
{
    icon:img3,
    title: "Responsive Web Application",
    disc: "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem",
},

]