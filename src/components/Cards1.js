import React from 'react';
import '../components/service.css';

const Cards1 = ({data}) => {

    return (
        <div>
            <div className='card container  my-lg-3 d-md-flex justify-content-center cardbody'>
                <img src={data.icon} className=' mx-auto my-lg-4 cardimg2' />
                <div className="card-body  text-center">
                    <div className="card-title  card1title " >
                        <b>{data.title}</b>
                        <p className='card-text'>{data.disc} </p>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Cards1