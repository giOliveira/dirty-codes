import React, { useState, useEffect } from 'react'
import Filter from '../../components/Filter'
import MovieCard from '../../components/MovieCard'
import data from './data'
import './style.css'

function App() {
  const [movies, setMovies] = useState()
  const [order, setOrder] = useState('rating')

  useEffect(() => {
    setMovies(data)
  }, [])

  const handleOrder = (e) => {
    setOrder(e.target.value)
  }

  const ordination = (a, b) => {
    if (order === 'rating') return b.rating - a.rating
    else if (order === 'name') return a.name.localeCompare(b.name)
    else if (order === 'year') return b.year - a.year
    else if (order === 'duration') return b.duration - a.duration
  } 

  return (
    <div className="movies__main">
      <h1>IMDB Top Rated Movies</h1>
      <div className="movies__content">
        <Filter handleOrder={handleOrder}/>
        <div className="movies__list">
          {
            movies &&  data.sort(ordination).map((movie) => {
              return (
                <MovieCard movie={movie}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App
