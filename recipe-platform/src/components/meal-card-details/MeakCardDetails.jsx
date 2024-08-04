import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTag } from '@fortawesome/free-solid-svg-icons';

function MealCardDetails({ meal }) {
  const recipe = meal;

  // Format ingredients for display
  const formatIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => (
      <li key={index} className="text-gray-700">
        {ingredient.quantity ? (
          <>
            <span className="font-semibold">{ingredient.quantity} {ingredient.unit}</span> 
            {ingredient.description}
          </>
        ) : (
          ingredient.description
        )}
      </li>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.publisher}</p>

        <div className="flex items-center mb-4">
          <div className="flex items-center mr-6">
            <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
            <span className="text-gray-700">{recipe.cooking_time} minutes</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTag} className="text-gray-500 mr-2" />
            <span className="text-gray-700">{recipe.category || 'No category available'}</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients?.length > 0 ? formatIngredients(recipe.ingredients) : <li className="text-gray-500">No ingredients listed.</li>}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions || 'No instructions available.'}</p>

        <a href={recipe.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Recipe Source
        </a>
      </div>
    </div>
  );
}

export default MealCardDetails;
