import React from 'react';
import './RandomSetlist.css'
import PropTypes from 'prop-types';

const RandomSetlist = ({ song }) => {
  return (
    <div className='setlistCard'>
      <p className='songs'>{song}</p>
    </div>
  )
}

export default RandomSetlist;



RandomSetlist.propTypes = {
  song: PropTypes.string
}