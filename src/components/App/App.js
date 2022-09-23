import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SetlistArea from '../SetlistArea/SetlistArea'
import Form from '../Form/Form'
import Guesses from '../Guesses/Guesses'
import { getAllShows, getShowByDate } from '../../apiCalls';
import './App.css';


const App = () => {
  const [shows, setShows] = useState([]);
  const [setlist, setSetlist] = useState([]);

  const [guessState, setGuessState] = useState([])
  const addGuess = (newGuess) => { setGuessState([...guessState, newGuess]) }

  useEffect(() => {
    getAllShows().then((json) =>
       setShows(json.data))

    getShowByDate().then((json) =>   
      setSetlist(json.data))
  }, [])

  const getRandomSetlist = () => {
    const getRandom = shows[Math.floor(Math.random() * shows.length)]
  
    return fetch(`https://api.phish.net/v5/setlists/showdate/${getRandom.showdate}.json?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setSetlist(data.data))

  }

  return (
    <div className="App">
      <Header />
      <main>
        <SetlistArea setlist={setlist} getRandomSetlist={getRandomSetlist} />
        <div className='descriptionDiv'>
          <button className='accessMeButton'>Access Me</button>
          <p className='description'>Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go.</p>
        </div>
      </main>
      <div className='formGuessDiv'>
        <Form addGuess={addGuess} />
        <Guesses guessState={guessState} />
      </div>
    </div>
  );
}

export default App;


//button name idea for going back home, take you back to your abode