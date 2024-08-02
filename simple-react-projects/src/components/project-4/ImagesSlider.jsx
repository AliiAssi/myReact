import React, { useEffect, useState } from 'react';

function ImagesSlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setIsError(false);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      // Assuming data is an array of image objects
      setImages(data.slice(0, 5)); // Adjust as needed
    } catch (e) {
      setIsError(true);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handlePrev = () => {
    setSliderIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setSliderIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1));
  };

  if (loading) {
    return <div className="m-4 text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="m-4 text-center text-red-600">{error}</div>;
  }

  if (images.length === 0) {
    return <div className="m-4 text-center">No images available.</div>;
  }

  return (
    <div className="m-4 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={images[sliderIndex].url}
          alt={`Slide ${sliderIndex + 1}`}
          className="object-cover w-full h-64 rounded-t-lg"
        />
        <button
          onClick={handlePrev}
          disabled={sliderIndex === 0}
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={sliderIndex === images.length - 1}
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          &gt;
        </button>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{images[sliderIndex].title}</h2>
        <p className="text-gray-600">This is the description for slide {sliderIndex + 1}</p>
      </div>
    </div>
  );
}

export default ImagesSlider;
