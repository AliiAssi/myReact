import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/meal-card/MealCardItem";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";
import { useState } from "react";

function Index() {
  const { state } = useContext(GlobalContext);
  let searchTerm = state.searchTerm;
  if(searchTerm === '') searchTerm = 'pizza';
  const { data, error, isLoading } = useFetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}&key=c5579a93-5b72-4097-a0a9-0f858d919af2`);

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

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && data.data.recipes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {data.data.recipes.map((meal) => (
            <MealCard 
              key={meal.id} 
              meal={meal} 
              isFavorite={favorites.some(fav => fav.id === meal.id)} 
              onFavoriteToggle={() => handleFavoriteToggle(meal)} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
