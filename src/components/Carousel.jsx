import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902'
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <img
              src={`${image}?auto=format&fit=crop&w=2000&q=80`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Welcome to The Luck League</h2>
                <p className="text-xl">Where Connections, Growth, and Opportunity Meet</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;