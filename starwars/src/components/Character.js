import React from 'react'
import { Table, Box } from '@material-ui/core'

export default function Character(props) {
    return (
        <div>
            <Box bgcolor="error.main" border={1} borderColor="primary.main" boxShadow={3}>
            <Table>
            <p>Name: {props.character.name}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Eye Color: {props.character.eye_color}</p>
            </Table>
            </Box>
        </div>
    )
}