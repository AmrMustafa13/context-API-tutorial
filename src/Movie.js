import React from 'react'

const Movie = ({ movie }) => {
    return (
        <div>
            <p>{movie.name}</p>
            <p>{movie.price}</p>
        </div>
    )
}

export default Movie