import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SetlistArea from '../SetlistArea/SetlistArea'
import './App.css';


const App = () => {
  // const [appState, setAppState] = useState([]);
  const [shows, setShows] = useState([]);
  const [setlist, setSetlist] = useState([]);

  useEffect(() => {
    fetch('https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=D2800C1C671B179D0401')
     .then((res) => res.json())
     .then((data) => setShows(data.data))
    // fetch('https://api.phish.net/v5/setlists/showdate/1997-12-07.json?apikey=D2800C1C671B179D0401')
    //  .then((res) => res.json())
    //  .then((data) => console.log(data, "setlist data"))
  }, [])

  const getRandomSetlist = () => {
    const getRandom = shows[Math.floor(Math.random() * shows.length)]
    console.log(getRandom, "random show")

    
      return fetch(`https://api.phish.net/v5/setlists/showdate/${getRandom.showdate}.json?apikey=D2800C1C671B179D0401`)
      .then((res) => res.json())
      .then((data) => setSetlist(data.data))
  

  }
  // const randomize = () => {
  //   const getRandom =
  //     resultState.songs[Math.floor(Math.random() * resultState.songs.length)];

  //   setResultState({
  //     songs: [...resultState.songs],
  //     currentMood: resultState.currentMood,
  //     randomSong: getRandom,
  //   });
  // };
  //you just pull in the shows data first then you write a function that will fetch the setlist based on that shows.date. 
 

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
