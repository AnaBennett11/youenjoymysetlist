import React from 'react';
import './Error.css';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Link to='/'>
            <div>
                <button className="errorButton">Try Again</button>
            </div>
        </Link>
    )
}

export default Error;
