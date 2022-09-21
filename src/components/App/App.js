import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SetlistArea from '../SetlistArea/SetlistArea'
import './App.css';
// console.log(process.env.REACT_APP_API_KEY)

const App = () => {
  const [shows, setShows] = useState([]);
  const [setlist, setSetlist] = useState([]);

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
      {/* {window.addEventListener("load", setlist)} */}
     <Header />
     <SetlistArea setlist={setlist} getRandomSetlist={getRandomSetlist}/>
     {/* <button onClick={() => getRandomSetlist()}>Get a random setlist</button> */}
    </div>
  );
}

export default App;


//button name idea for going back home, take you back to your abode