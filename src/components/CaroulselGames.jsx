import { React } from '../config/configComponents';
import { Carousel } from 'react-bootstrap';
import Image1 from '../assets/Caroulsel 1.jpg';
import Image2 from '../assets/Caroulsel 2.jpg';


const CaroulselGames = () => {

  return <Carousel>

    <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={Image1} alt="First slide" />
      <Carousel.Caption />
    </Carousel.Item>

    <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={Image2} alt="Second slide" />
      <Carousel.Caption />
    </Carousel.Item>

  </Carousel>
}

export default CaroulselGames;