import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ addGuess }) => {

    const [firstName, setFirstName] = useState("")
    const [set1opener, setSet1opener] = useState("")
    const [set2opener, setSet2opener] = useState("")
    const [bustout, setBustout] = useState("")
    const [cover, setCover] = useState("")
    const [encore, setEncore] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const newGuess = {
            id: Date.now(),
            firstName,
            set1opener,
            set2opener,
            bustout,
            cover,
            encore
        }
        addGuess(newGuess)
        clearInputs();
    }

    const clearInputs = () => {
        setFirstName("");
        setSet1opener("");
        setSet2opener("");
        setBustout("");
        setCover("");
        setEncore("");
    }

    return (
        <div className='formAndGuessesContainer'>
            <form >
                <div className='formDiv'>
                    <input className='input1'
                        type="text" 
                        placeholder="name"
                        required
                        onChange={(event) => setFirstName(event.target.value)}
                        name="firstName"
                        value={firstName} 
                    />
                    <input className='input2'
                        type="text"
                        placeholder="set1opener"
                        required
                        onChange={(event) => setSet1opener(event.target.value)}
                        name="set1opener"
                        value={set1opener}
                    />
                    <input className='input3'
                        type="text"
                        placeholder="set2opener"
                        required
                        onChange={(event) => setSet2opener(event.target.value)}
                        name="set2opener"
                        value={set2opener}
                    />
                    <input className='input4'
                        type="text"
                        placeholder="bustout"
                        required
                        onChange={(event) => setBustout(event.target.value)}
                        name="bustout"
                        value={bustout}
                    />
                    <input className='input5'
                        type="text"
                        placeholder="cover"
                        required
                        onChange={(event) => setCover(event.target.value)}
                        name="cover"
                        value={cover}
                    />
                    <input className='input6'
                        type="text"
                        placeholder="encore"
                        required
                        onChange={(event) => setEncore(event.target.value)}
                        name="encore"
                        value={encore}
                    />
                </div>
                <button className="sendButton" role="button" onClick={handleSubmit}>Send it</button>
            </form>
        </div>

    )
}


export default Form;

Form.propTypes = {
    addGuess: PropTypes.func.isRequired,

}
