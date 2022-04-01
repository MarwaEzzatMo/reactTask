import React from "react"; 
import Carousel from 'react-bootstrap/Carousel'


function Homepage (){ 
  
    return ( 
    <Carousel   className=" p-3 mb-2  bg=dark  text-dark expand=lg">
  <Carousel.Item> 
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/R.ffc7ab767e29ac9c103ca85e2a030f2e?rik=92%2fyVN%2b%2bOOowBA&riu=http%3a%2f%2fphotos.demandstudios.com%2fgetty%2farticle%2f94%2f195%2f176702955.jpg&ehk=B8%2f%2b8iLzOA%2fwcz9RY6NCC2IbM5%2bC1NiPIiOw46cqqRg%3d&risl=&pid=ImgRaw&r=0"
      alt="First slide"
    />
    <Carousel.Caption> 
    <h1> hello from home </h1> 
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/8c/58/69/8c58697375ac172018256dd12124bd3a.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x1024:format=jpg/path/s3a27959d2ee5dca1/image/ic0efd94ca4e10791/version/1502775274/akupunktur-ohrakupunktur-schr%C3%B6pfen-schr%C3%B6pfkopfmassage-individuelle-beratung-tcm-kinderheilkunde-kinderheilpraktiker-blauviolette-kornblume.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 


)


} 
export default Homepage ;