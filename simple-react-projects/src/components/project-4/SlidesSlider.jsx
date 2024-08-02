import React, { useState } from 'react';

function SlidesSlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
    { title: 'Slide 1', content: 'Content 1' },
    { title: 'Slide 2', content: 'Content 2' },
    { title: 'Slide 3', content: 'Content 3' },
  ];

  const handlePrev = () => {
    setSliderIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setSliderIndex(prevIndex => Math.min(prevIndex + 1, slides.length - 1));
  };

  return (
      <div className="m-3 w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6">
          <button
            className={`px-4 py-2 bg-gray-300 text-white rounded-md mr-2 ${sliderIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={sliderIndex === 0}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 bg-gray-300 text-white rounded-md ${sliderIndex === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={sliderIndex === slides.length - 1}
          >
            Next
          </button>
          <h1 className="text-xl font-bold mt-4">{slides[sliderIndex].title}</h1>
          <p className="mt-2">{slides[sliderIndex].content}</p>
        </div>
      </div>
  );
}

export default SlidesSlider;
