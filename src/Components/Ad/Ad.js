import React from 'react';
import './Ad.css';

export default function Advert() {

    return (
        <>
        <div id="slide" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#slide" data-slide-to="0" className="active pullet"></li>
                <li data-target="#slide" data-slide-to="1" className='pullet'></li>
                <li data-target="#slide" data-slide-to="2" className='pullet'></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assest/banner-1.jpg"} alt="First slide" ></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assest/banner-2.jpg"} alt="Second slide" ></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={process.env.PUBLIC_URL + "/assest/banner-2.jpg"} alt="third slide" ></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#slide" role="button" data-slide="prev">
                <div className='back-icon'>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#slide" role="button" data-slide="next">
                <div className='back-icon'>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </div>
            </a>
            </div>
        </>
    );
}