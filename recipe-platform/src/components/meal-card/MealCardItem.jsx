import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function MealCard({ meal, isFavorite, onFavoriteToggle }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={meal.image_url}
        alt={meal.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
        <p className="text-gray-700 mb-4">{meal.publisher}</p>
      </div>
      <div className="absolute top-4 right-4">
        <button 
          onClick={onFavoriteToggle} 
          className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`text-xl ${isFavorite ? 'text-red-600' : 'text-gray-400'}`} 
          />
        </button>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <Link 
          to={`/recipe-details/${meal.id}`} 
          className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 text-center transition duration-300"
        >
          <span className="flex items-center justify-center">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-lg" />
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
}

export default MealCard;
