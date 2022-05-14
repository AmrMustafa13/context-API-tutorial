import React, { useContext, useState } from 'react'
import { MoviesContext } from './App'

const AddMovie = () => {

    const [, setMovies] = useContext(MoviesContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies((prevState) => {
            const newMovies = [...prevState, { name, price, id: Date.now() }]
            localStorage.setItem('movies', JSON.stringify(newMovies))
            return newMovies
        })
        setName('')
        setPrice('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie