import React from 'react'
import Character from './Character'

export default function Characters(props) {
    return (
        <div>
             {props.characters.map(character => (<Character character={character} />
            ))}
        </div>
    )
}