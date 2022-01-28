import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader';
// import Message from './Message';
// import { listTopProducts } from '../store/actions/productActions';

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      pause='hover'
      fade
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
