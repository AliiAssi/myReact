import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider({ indexOn, setIndexOn, imageUrl, page, setPage, totalImages }) {
  const handlePrev = () => {
    if (indexOn > 0) {
      setIndexOn(prevIndex => prevIndex - 1);
    } else if (page > 1) {
      setPage(prevPage => prevPage - 1);
      setIndexOn(totalImages - 1); // Go to the last image of the previous page
    }
  };

  const handleNext = () => {
    if (indexOn < totalImages - 1) {
      setIndexOn(prevIndex => prevIndex + 1);
    } else {
      setPage(prevPage => prevPage + 1);
      setIndexOn(0); // Go to the first image of the next page
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={`Slide ${indexOn + 1}`}
        className="object-cover w-full h-64"
      />
      <button
        onClick={handlePrev}
        disabled={indexOn === 0 && page === 1}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={handleNext}
        disabled={totalImages === 0}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Slider;
