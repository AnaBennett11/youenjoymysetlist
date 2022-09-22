import React from 'react';
import RandomSetlist from '../RandomSetlist/RandomSetlist';
import './SetlistArea.css';

const SetlistArea = ({setlist, getRandomSetlist}) => {
    console.log(setlist)
    const thesetlist = setlist.map((setlist) => <RandomSetlist 
           key={setlist.uniqueid}
           song={setlist.song}
           />)


    return (
        <div className='setlistArea'>
            {/* <p>{thesetlist.showdate}</p> */}
            <div className='setlistDiv'>
              <h5>{thesetlist}</h5>
            </div>
            <div className='randomButtonDiv'>
              <button className="button-50" role="button" onClick={() => getRandomSetlist()}>Mystery Setlist</button>
            </div>
        </div>
    )
}

export default SetlistArea;


