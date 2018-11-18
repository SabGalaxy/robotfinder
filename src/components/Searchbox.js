import React from 'react';
import '../containers/App.css';

const Searchbox = ( {searchchange} ) =>{
    return (
        <div className="pa2">
        <input type="text" placeholder="Search Robots" className="pa-1 ba b--green bg-lightest-blue search-box" onChange={searchchange}/>
        </div>
       
    )
}

export default Searchbox;