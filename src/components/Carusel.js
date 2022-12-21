import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="text-center">
        <img
          className="d-block container-fluid"
          src="https://hoteldonhoracio.com/wp-content/uploads/2020/09/Cataratas-desde-Mendoza-Portada.jpg"
           
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-60">
          <p>Es un paseo accesible a todos, donde el Tren Ecológico, lleno de magia y emoción,<br/> 
            ayuda a disfrutar de una actividad al aire libre en familia.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/36/cf/01/20170805-102238-largejpg.jpg?w=700&h=500&s=1"
          style={{height:600, width:9000}}
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-60">
          <p>PATRIMONIO MUNDIAL NATURAL DE LA HUMANIDAD 
            Una de las 7 maravillas naturales del mundo, 
            con más de 250 saltos de agua en plena Selva paranaense, 
            a 17 kilómetros de la desembocadura del río Iguazú</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.traveler.es/photos/613768f04c612f07ec398ef9/master/w_1600%2Cc_limit/158844.jpg"
          
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-60">
          <p className="parraf">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;