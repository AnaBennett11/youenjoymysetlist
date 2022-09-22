import React from 'react';
import './GuessCard.css'

const GuessCard = ({ firstName, set1opener, set2opener, bustout, cover, encore }) => {

    return (
        <fieldset className='guessCard'>
            <div className='firstNameDiv'>
                <label htmlFor="firstName">Name: {firstName}</label>
                <input className='checkbox' type="checkbox" id="firstName" name="firstName" />
            </div>
            <div className='set1openerDiv'>
                <label htmlFor="set1opener">Set 1 Opener: {set1opener}</label>
                <input className='checkbox' type="checkbox" id="set1opener" name="set1opener" />
            </div>
            <div className='set2openerDiv'>
                <label htmlFor="set2opener">Set 2 Opener: {set2opener}</label>
                <input className='checkbox' type="checkbox" id="set2opener" name="set2opener" />
            </div>
            <div className='bustoutDiv'>
                <label htmlFor="bustout">Bustout: {bustout}</label>
                <input className='checkbox' type="checkbox" id="bustout" name="bustout" />
            </div>
            <div className='coverDiv'>
                <label htmlFor="cover">Cover: {cover}</label>
                <input className='checkbox' type="checkbox" id="cover" name="cover" />
            </div>
            <div className='encoreDiv'>
                <label htmlFor="encore">Encore: {encore}</label>
                <input className='checkbox' type="checkbox" id="encore" name="encore" />
            </div>
        </fieldset>




    )
}

export default GuessCard;
