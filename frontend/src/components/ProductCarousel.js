import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader';
// import Message from './Message';
// import { listTopProducts } from '../store/actions/productActions';

const ProductCarousel = () => {
  return (
    <Carousel
      pause='hover'
    >
      <Carousel.Item id='sweetCar'>
        <Carousel.Caption>
          <h2>Sweet Fried Pies</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id='pizzaCar'>
        <Carousel.Caption>
          <h2>New Pizza Puffs</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id='contactCar'>
        <Carousel.Caption>
          <h2>Contact Us</h2>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default ProductCarousel;
