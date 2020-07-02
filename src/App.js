import React, {useEffect, useState} from 'react';

import './App.css';

const App = () => {
  const APP_ID = "20ffc04d";
  const APP_KEY = "e6c7f739e935a020ab7892d9d9afc4ae";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    console.log('effect has been run');
  }, [counter]); //only when counter changes the useEEffet runs. 

  return (
    <div className="App">
    <form className="search-form">
    <input className="search-bar" type="text" />
    <button className="sarch-button" type="submit">Search</button>
    </form>
    <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>
  )
}

export default App;
