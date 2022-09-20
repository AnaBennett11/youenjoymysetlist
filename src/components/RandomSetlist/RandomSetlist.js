import React from 'react';
import './RandomSetlist.css'

const RandomSetlist = ({setlist, showdate, id}) => {
  return (
    <div className='setlistCard'>
        <p>{setlist}</p>
        <p>{showdate}</p>
        <p>{id}</p>

    </div>
  )

}

export default RandomSetlist;
