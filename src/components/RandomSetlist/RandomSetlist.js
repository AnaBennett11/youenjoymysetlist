import React from 'react';
import './RandomSetlist.css'

const RandomSetlist = ({artistname, showdate, venue, city, song}) => {
  return (
    <div className='setlistCard'>
        {/* <p>{artistname}</p>
        <p>{showdate}</p>
        <p>{venue}</p>
        <p>{city}</p> */}
        <p className='songs'>{song}</p>

    </div>
  )

}

export default RandomSetlist;
