import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import { APP_ID, APP_KEY} from './keys'

const App = () => {
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
    <button className="search-button" type="submit">Search</button>
    </form>
    <div className="recipes">
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
    </div>
  )
}

export default App;
