import React, { useState, useEffect } from 'react';
// import Header from '../Header/Header';
// import SetlistArea from '../SetlistArea/SetlistArea'
import Form from '../Form/Form'
import Guesses from '../Guesses/Guesses'
import './App.css';
// console.log(process.env.REACT_APP_API_KEY)

const App = () => {
  const [shows, setShows] = useState([]);
  const [setlist, setSetlist] = useState([]);

  const [guessState, setGuessState] = useState([])
  const addGuess = (newGuess) => { setGuessState([...guessState, newGuess]) }

  useEffect(() => {
    //either do another fetch call inside here to load setlist
    // fetch(`https://api.phish.net/v5/setlists/showdate/${getRandom.showdate}.json?apikey=${process.env.REACT_APP_API_KEY}`)
    //   .then((res) => res.json())
    //   .then((data) => setSetlist(data.data))

    fetch(`https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=${process.env.REACT_APP_API_KEY}`)
     .then((res) => res.json())
     .then((data) => setShows(data.data))

    fetch(`https://api.phish.net/v5/setlists/showdate/1998-10-30.json?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setSetlist(data.data))
  }, [])

  const getRandomSetlist = () => {
    const getRandom = shows[Math.floor(Math.random() * shows.length)]
    // console.log(setlist)
    return fetch(`https://api.phish.net/v5/setlists/showdate/${getRandom.showdate}.json?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setSetlist(data.data))
      
  }
 
  return (
    <div className="App">
     {/* <Header />
     <main>
      <SetlistArea setlist={setlist} getRandomSetlist={getRandomSetlist}/>
      <p className='description'>Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go. Hello this is where teh instructions to the app will go.</p>
     </main> */}
     <div className='formGuessDiv'>
       <Form addGuess={addGuess}/>
       <Guesses guessState={guessState} />
      </div>
    </div>
  );
}

export default App;


//button name idea for going back home, take you back to your abode