import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "20ffc04d";
  const APP_KEY = "e6c7f739e935a020ab7892d9d9afc4ae";

  const[recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken'); //query is created to fetch the data only once when click the submit button

  useEffect(() =>{
    getRecipes();
  }, [query]); // useEEffet runs only once

  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form" >
    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
    <button className="sarch-button" type="submit">Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe  
      key = {recipe.recipe.label}
      title = {recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      />
    ))}
    </div>
  )
}

export default App;
