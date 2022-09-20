import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SetlistArea from '../SetlistArea/SetlistArea'
import './App.css';
// require('dotenv').config()
console.log(process.env.REACT_APP_API_KEY)

const App = () => {
 
  const [shows, setShows] = useState([]);
  const [setlist, setSetlist] = useState([]);

  useEffect(() => {
    fetch(`https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=${process.env.REACT_APP_API_KEY}`)
     .then((res) => res.json())
     .then((data) => setShows(data.data))
 
  }, [])

  const getRandomSetlist = () => {
    const getRandom = shows[Math.floor(Math.random() * shows.length)]
    console.log(setlist)
    return fetch(`https://api.phish.net/v5/setlists/showdate/${getRandom.showdate}.json?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setSetlist(data.data))
  
      
  }

 

  // const chooseRandomSetlist = () => {
  //   //randomly find a date from the data above then once you find that random date 
  //   //you do another function with another fetch call to that endpoints interpolated date
  //   //then display it
  // }
 
  return (
    <div className="App">
      <button onClick={() => getRandomSetlist()}>button</button>
     <Header />
     <SetlistArea />
    </div>
  );
}

export default App;
