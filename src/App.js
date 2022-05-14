import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import NavBar from './NavBar'
import { createContext } from 'react'
import AddMovie from './AddMovie'

const INITIAL_MOVIES = [
    {
        name: 'harry potter',
        price: '$30',
        id: 1
    },
    {
        name: 'the maze runner',
        price: '$50',
        id: 2
    },
    {
        name: 'me before you',
        price: '$90',
        id: 3
    }
]

export const MoviesContext = createContext();

const App = () => {

    const [movies, setMovies] = useState(INITIAL_MOVIES)

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('movies'))
        if (storedMovies !== null)
            setMovies(storedMovies)
    }, [])

    return (
        <MoviesContext.Provider value={[movies, setMovies]}>
            <NavBar />
            <AddMovie />
            <MovieList />
        </MoviesContext.Provider>
    )
}

export default App