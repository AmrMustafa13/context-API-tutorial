import React, { useContext } from 'react'
import { MoviesContext } from './App'
import Movie from './Movie'

const MovieList = () => {
    const [movies] = useContext(MoviesContext)

    return (
        <div>
            {movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
        </div>
    )
}

export default MovieList        