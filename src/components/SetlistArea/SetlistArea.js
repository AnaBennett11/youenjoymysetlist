import React from 'react';
import RandomSetlist from '../RandomSetlist/RandomSetlist';
import PropTypes from 'prop-types';
import './SetlistArea.css';

const SetlistArea = ({ setlist, getRandomSetlist }) => {
  
  const thesetlist = setlist.map((setlist) => <RandomSetlist
    key={setlist.uniqueid}
    song={setlist.song}
  />)

  return (
    <div className='setlistArea'>
      <div className='setlistDiv'>
        {!thesetlist.length ? <h5>Oh something went wrong please try again.</h5> : <h5>{thesetlist}</h5>}
      </div>
      <div className='randomButtonDiv'>
        <button className="button-50" onClick={() => getRandomSetlist()}>Mystery Setlist</button>
      </div>
    </div>
  )
}


export default SetlistArea;

SetlistArea.propTypes = {
  getRandomSetlist: PropTypes.func,
  setlist: PropTypes.array
}
