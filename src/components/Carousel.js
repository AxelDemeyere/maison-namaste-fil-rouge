import React from 'react';

import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/carousel-3.jpg'
import carousel4 from '../img/carousel-4.jpg'

import { Carousel as AntdCarousel } from 'antd';
const contentStyle = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    color: '#fff',
    lineHeight: 'auto',
    textAlign: 'center',
    background: 'white',
};

const Carousel = () => (
  <AntdCarousel autoplay>
    <div className='carousel-container'>
      <h3 style={contentStyle} ><img src={carousel1} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={carousel2} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={carousel3} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={carousel4} alt="" /></h3>
    </div> 
  </AntdCarousel>
);
export default Carousel;