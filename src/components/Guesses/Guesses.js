import React from 'react';
import GuessCard from '../GuessCard/GuessCard'
import PropTypes from 'prop-types';
import './Guesses.css'
import { Link } from 'react-router-dom';

const Guesses = ({ guessState }) => {

    const theGuesses = guessState.map(guess => {
        return (<GuessCard
            key={guess.firstName}
            firstName={guess.firstName}
            set1opener={guess.set1opener}
            set2opener={guess.set2opener}
            bustout={guess.bustout}
            cover={guess.cover}
            encore={guess.encore}
        />)
    })

    return (
        <div className='guessesAndButtonDiv'>
            <div className='guessHolder'>
                {theGuesses}
            </div>
            <Link to={`/`} >
                <button className='homeButton'>back to your abode</button>
            </Link>
        </div>
    )
}

Guesses.propTypes = {
  guessState: PropTypes.shape({
    map: PropTypes.func
  })
}

export default Guesses;


