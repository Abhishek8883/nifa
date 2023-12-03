import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";




const carousel = () => {
    return (
        <Carousel  className='carousel-container'>
            <Carousel.Item>
                <img className='image' src='https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='image' src='https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='image' src='https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='image' src='https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='image' src='https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg'/>
            </Carousel.Item>
        </Carousel>
    )
}
export default carousel