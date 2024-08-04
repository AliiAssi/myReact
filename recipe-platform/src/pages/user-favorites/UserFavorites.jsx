import React, { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import MealCard from '../../components/meal-card/MealCardItem';

function UserFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorite', []);

  const handleFavoriteToggle = (meal) => {
    const isFavorite = favorites.some(fav => fav.id === meal.id);
    const updatedFavorites = isFavorite 
      ? favorites.filter((fav) => fav.id !== meal.id) 
      : [...favorites, meal];

    setFavorites(updatedFavorites);
  };

  useEffect(() => {
  }, [favorites]);

  if (favorites.length === 0) {
    return <p>No favorite items found.</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {favorites.map((meal) => (
          <MealCard 
            key={meal.id} 
            meal={meal} 
            isFavorite={true} // All items in this list are favorites
            onFavoriteToggle={() => handleFavoriteToggle(meal)} 
          />
        ))}
      </div>
    </div>
  );
}

export default UserFavorites;
