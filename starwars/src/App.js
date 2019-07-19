import React, {useEffect, useState} from 'react';
import './App.css';
import { Box, borders } from '@material-ui/core'
import axios from 'axios'
import Characters from './components/Characters'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  
  
  const fetchData = () => {
    axios
    .get('https://swapi.co/api/people/')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => console.log(err))
  }

  useEffect( () => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Box bgcolor="primary.main" border={1} borderRadius="50%" borderColor="text.primary"></Box>
      <h1 className="Header">React Wars</h1>
      <Box />
     <Characters characters={characters} />
    </div>
  );
}

export default App;

