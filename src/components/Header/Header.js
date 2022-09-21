import React from 'react';
import './Header.css';

const Header = () => { 
    return (
        <div className='headerContainer'>
            <div className='headerText'>
             <h1>You Enjoy My Setlist</h1>
            </div>
            <div className='headerButton'>
             <button className='accessMeButton'>Access Me</button>
            </div>
        </div>
    )
}

export default Header;



