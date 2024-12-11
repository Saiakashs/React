import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/images/1_petra_jordan.jpeg';
import img2 from '../assets/images/2_wall_china.jpg';
import img3 from '../assets/images/3_christ_redeemer_brazil.jpg';


const MyCarouselComp = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={img1} alt='petra' style={{width:"100%" , height:"400px"}}></img>
                    <Carousel.Caption>
                    <h3>Petra, Jordan</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={img2} alt='wall' style={{width:"100%" , height:"400px"}}></img>
                    <Carousel.Caption>
                    <h3>Wall Of China, China</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={img3} alt='christ' style={{width:"100%" , height:"400px"}}></img>
                    <Carousel.Caption>
                    <h3>Christ Redeemer, Brazil</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarouselComp
