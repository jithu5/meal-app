import React, { useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const getFavouritesFromLocalStorage=()=>{
  let favourites = localStorage.getItem('favourites')
  if (!favourites){
    favourites=[]
  }else{
    favourites = JSON.parse(localStorage.getItem('favourites'))
  }
  return favourites
}

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(false); // loading state for the data for fetching

  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const [favourites, setFavourites] = useState(getFavouritesFromLocalStorage());

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  };

  const selectMeal = (idMeal, favouriteMeal) => {
    let meal;
    if (favouriteMeal) {
      meal = favourites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const addToFavourites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavourites = favourites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavourites) return;
    const updatedFavourites = [...favourites,meal]
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites',JSON.stringify(updatedFavourites))
  };
  
  const RemoveFromFavourites = (idMeal) => {
    const updatedFavourite = favourites.filter(
      (item) => item.idMeal !== idMeal
    );
    setFavourites(updatedFavourite);
    localStorage.setItem('favourites',JSON.stringify(updatedFavourite))
  };
  useEffect(() => {
    fetchMeals(allMealUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectedMeal,
        selectMeal,
        setShowModal,
        addToFavourites,
        RemoveFromFavourites,
        favourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
