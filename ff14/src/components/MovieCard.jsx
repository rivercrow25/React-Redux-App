import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getInfo } from '../actions/actions'
import MovieDetails from './MovieDetails'
import axios from 'axios'

const MovieCard = ({ data, getInfo, hasInfo }) => {
    const [species, setSpecies] = useState('')

    useEffect(() => {
        axios.get(data.species)
            .then(response => {
                setSpecies(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='card'>
            <h2>{data.title}</h2>
            <h3>{data.director}</h3>
            <p>{data.description}</p>
            {hasInfo ? <MovieDetails /> : <button onClick={() => getInfo(species)}>Get MovieDetails</button>}
        </div>
    )
}
const mstp = state => {
    return {
        hasInfo: state.hasInfo
    }
}

export default connect(mstp, { getInfo })(MovieCard)