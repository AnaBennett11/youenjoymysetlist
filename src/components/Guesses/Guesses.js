import React from 'react';
import GuessCard from '../GuessCard/GuessCard'
import './Guesses.css'

const Guesses = ({ guessState }) => {
    // console.log(guessState)
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
    // console.log(theGuesses, "the guesses")
    return (
        <div className='guessesAndButtonDiv'>
            <div className='guessHolder'>
                {theGuesses}
            </div>
            <button className='homeButton'>back to your abode</button>
        </div>
    )
}

export default Guesses;
