import React from 'react';
import './StarWars.css';

// get the info from API component for starwarsChar
const Characteristics = props => {
    return(
        <div className='person'>
            <p>Name: {props.item.name}</p>
            <p>Mass: {props.item.mass}</p>
            <p>Birth Year: {props.item.birth_year}</p>
            <p>Eye Color: {props.item.eye_color}</p>
        </div>
    )
}

export default Characteristics