import React from 'react'
import { MoviesContext } from './App'
import { useContext } from 'react'

const NavBar = () => {

    const [movies] = useContext(MoviesContext)

    return (
        <div>You Have {movies.length} Movie</div>
    )
}

export default NavBar