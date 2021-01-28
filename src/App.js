import React,{useEffect,useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "4cb76602";
  const APP_KEY = "740f0455cfa55e37d5bde93c4e11bc13";

 
const [recipes, setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState('fish');

  useEffect(()=> {
getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);
  
 
 
 const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    
  }
  
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return (
    <div className="App">
  <h1>Welcome to Recipe Search</h1>
  <form onSubmit={getSearch} className='search-form'>
  
    <input className= 'search-bar' type='text' value={search} onChange={updateSearch}></input>
    <button  className= 'search-button' type='submit'>Search</button>
  </form>
  <div className="recipes">
  {recipes.map(recipe => (<Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label} calories={recipe.recipe.calories}
  image={recipe.recipe.image}
 ingredients={recipe.recipe.ingredients}
  />))}
  </div>
    </div>
  );
};

export default App;
