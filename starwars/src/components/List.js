import React from 'react';
import Characteristics from './Characteristics';
import './StarWars.css';

//component for rendering to screen and mapping through items for correct data
const List = props => {
    return(
        <div className='list'>
            {props.starwarsChars.map(item => (<Characteristics item={item} />
            ))}
        </div>
    )

}

export default List