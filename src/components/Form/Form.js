import React, { useState } from 'react';
// import Guesses from '../Guesses/Guesses';
import './Form.css';

const Form = ({addGuess}) => {
    // const [formData, setFormData] = useState([{
    //     firstName: "",
    //     set1opener: "",
    //     set2opener: "",
    //     bustout: "",
    //     cover: "",
    //     encore: ""
    // }])
    const [firstName, setFirstName] = useState("")
    const [set1opener, setSet1opener] = useState("")
    const [set2opener, setSet2opener] = useState("")
    const [bustout, setBustout] = useState("")
    const [cover, setCover] = useState("")
    const [encore, setEncore] = useState("")

    // const [guessState, setGuessState] = useState([])
    
 
    // const handleChange = (event) => {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }
    // const addGuess = (newGuess) => { setGuessState([...guessState, newGuess]) }
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
                {/* onSubmit={handleSubmit} */}
                <div className='formDiv'>
                    <p className='formLabels'>Name:</p>
                    <input
                        type="text"
                        placeholder="name"
                        onChange={(event) => setFirstName(event.target.value)}
                        name="firstName"
                        value={firstName}
                    />
                    <p className='formLabels'>Set 1 Opener:</p>
                    <input
                        type="text"
                        placeholder="set1opener"
                        onChange={(event) => setSet1opener(event.target.value)}
                        name="set1opener"
                        value={set1opener}
                    />
                    <p className='formLabels'>Set 2 Opener:</p>
                    <input
                        type="text"
                        placeholder="set2opener"
                        onChange={(event) => setSet2opener(event.target.value)}
                        name="set2opener"
                        value={set2opener}
                    />
                    <p className='formLabels'>Bustout:</p>
                    <input
                        type="text"
                        placeholder="bustout"
                        onChange={(event) => setBustout(event.target.value)}
                        name="bustout"
                        value={bustout}
                    />
                    <p className='formLabels'>Cover:</p>
                    <input
                        type="text"
                        placeholder="cover"
                        onChange={(event) => setCover(event.target.value)}
                        name="cover"
                        value={cover}
                    />
                    <p className='formLabels'>Encore:</p>
                    <input
                        type="text"
                        placeholder="encore"
                        onChange={(event) => setEncore(event.target.value)}
                        name="encore"
                        value={encore}
                    />
                    <button onClick={handleSubmit}>Send it</button>
                </div>

            </form>
            {/* <Guesses guesses={guessState}/> */}
        </div>

    )
}


export default Form;


