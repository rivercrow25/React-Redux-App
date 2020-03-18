import React from 'react'
import { connect } from 'react-redux'

const MovieDetails = ({ info }) => {
    console.log(info)
    return (
        <>
            <h2>{info.name}</h2>
            <ul>
                <li>{info.classification}</li>
                <li>eye colors:{info.eye_colors}</li>
                <li>hair colors: {info.hair_colors}</li>
            </ul>
        </>
    )
}
const mstp = state => {
    return {
        info: state.info
    }
}
export default connect(mstp, {})(MovieDetails)