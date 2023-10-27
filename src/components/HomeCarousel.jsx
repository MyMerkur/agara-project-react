import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeCarousel() {
    return (
        <div>

            <Carousel slide={false}>
                <Carousel.Item>
                    <img src="./images/city/city1.jpeg" alt="a" />
                    <Carousel.Caption>
                        <h3>Eski Ardahan</h3>
                        <p>1970</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/city/city2.webp" alt="a" />
                    <Carousel.Caption>
                        <h3>Eski Ardahan</h3>
                        <p>1960</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/city/city3.jpg" alt="a" />
                    <Carousel.Caption>
                        <h3>Eski Ardahan</h3>
                        <p>1980</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}
