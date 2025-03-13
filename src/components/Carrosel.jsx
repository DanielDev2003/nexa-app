import React from 'react'
import { Carousel } from 'react-bootstrap'
import escola from "../assets/escola.jpg"
import escola3 from "../assets/escola3.avif"
import Escola2 from "../assets/Escola2.avif"
const Carrosel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img className="d-block mx-auto w-50 h-auto" src={escola} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block mx-auto w-50 h-auto" src={escola3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block mx-auto w-50 h-auto" src={Escola2} alt="" />
            </Carousel.Item>
        </Carousel>
    );

}

export default Carrosel