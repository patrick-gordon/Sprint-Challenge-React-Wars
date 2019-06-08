import React from 'react';
import Person from './Person';
import './StarWars.css';

//component for rendering to screen and mapping through
const List = props => {
    return(
        <div className='list'>
            {props.starwarsChars.map(item => (<Person item={item} />
            ))}
        </div>
    )

}

export default List