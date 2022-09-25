import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SetlistArea from '../SetlistArea/SetlistArea';
import Form from '../Form/Form';
import Guesses from '../Guesses/Guesses';
import Error from '../Error/Error';
import { getAllShows, getShowByDate, getRandomShow } from '../../apiCalls';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';


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
    getRandomShow(getRandom.showdate)
      .then((data) => setSetlist(data.data))
  }
  const handleClick = () => {
    setGuessState(guessState)
  }

  return (

    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <main>
                <SetlistArea setlist={setlist} getRandomSetlist={getRandomSetlist} />
                <div className='descriptionDiv'>
                  <Link to={`/form`} onClick={handleClick}>
                    <button className='accessMeButton'>Access Me</button>
                  </Link>
                  <p className='description'>Are you and your phriends embarassingly obsessed with the band Phish? Do you like to guess what songs they'll play before every show? Click the button above to submit your guesses! You can submit your phriends' guesses too. You can also press 'Mystery Setlist' for inspiration. </p>
                </div>
              </main>
            </div>
          )}
        />
        <Route
          exact
          path="/form"
          render={() => (
            <div className='formGuessDiv'>
              <Form addGuess={addGuess} />
              <Guesses guessState={guessState} />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div>
              <Error />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
export default App;


