import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MealCardDetails from "../../components/meal-card-details/MeakCardDetails";

function RecipeDetails() {
  const { id } = useParams(); // Extract the id from the URL
  const {data, error , isLoading} = useFetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`, {});
  console.log(data);
  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null; // Return early if data is not available

  return (
    <div className="p-5">
      <MealCardDetails meal={data.data.recipe}/>
    </div>
  );
}

export default RecipeDetails;
