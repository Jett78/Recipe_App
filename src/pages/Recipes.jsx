import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Recipecard from "../components/Recipecard";
import PacmanLoader from "react-spinners/PacmanLoader";
import Footer from "../components/Footer";

const Recipes = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[search,setSearch] = useState("chicken");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    let timeoutId;
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const json = await response.json();
        setRecipe(json.meals);
        console.log(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data!!!");
      }
    };
    timeoutId = setTimeout(fetchdata, 2000); 
  
    
  }, [search]);
 

  if (error) return <div className="error">{error}</div>;
  if (loading)
    return (
      <div className="loading-bar">
        <PacmanLoader
          color="#36d7b7"
          cssOverride={{}}
          loading
          size={25}
          speedMultiplier={1}
        />
      </div>
    );

  return (
    <main>
    <Search handleSearch={handleSearch}/>
    <div className="recipecard-api">
      {recipe?.length > 0 ? (             //To display a "Not Found" message when the searched data is not available,
        recipe.map((recipe) => (
          <Recipecard key={recipe.idMeal} recipe={recipe} />
        ))
      ) : (
        <div className="not-found">No results found</div>
      )}
    </div>
    <Footer/>
  </main>
     
  );
};

export default Recipes;
