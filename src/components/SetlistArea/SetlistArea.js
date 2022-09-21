import React from 'react';
import RandomSetlist from '../RandomSetlist/RandomSetlist';
import './SetlistArea.css';

const SetlistArea = ({setlist}) => {
    console.log(setlist)
    // const foundSetlist = setlist.map(setlist => <RandomSetlist 
    //     key={setlist.showid}
    //     setlist={setlist.permalink}
    //     showdate={setlist.showdate}
    //     id={setlist.showid}
        
    //     />)
    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default SetlistArea;