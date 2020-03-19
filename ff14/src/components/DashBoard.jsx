import React from 'react'
import MovieCard from './MovieCard'

const Dashboard = (props) => {
    console.log('props', props)
    return (
        <div className='cardContainer'>
            {props.data.map(item => {
                return <MovieCard key={item.id} data={item} />
            })}
        </div>
    )
}

export default Dashboard