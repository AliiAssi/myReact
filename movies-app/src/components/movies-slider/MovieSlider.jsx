import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const MovieSlider = () => (
  <div className="px-4 py-8">
    <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
    <Slider {...settings}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src={`https://via.placeholder.com/1200x500?text=Movie+${index + 1}`}
            alt={`Movie ${index + 1}`}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Movie Title {index + 1}</h3>
            <p className="text-gray-400">Some description about the movie.</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default MovieSlider;
