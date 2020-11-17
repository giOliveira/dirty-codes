import React, { useState } from 'react';

const MovieCard = ({ movie }) => {

        const renderCathegory = () => {
            movie.categories.map(category => {
                return category + ', '
            })
        }

        const [showResume, setShowResume] = useState(false)

        const rate = movie.rating > 9 ? 'high' : 'medium'
        const hour = Math.floor(movie.duration / 60)
        const minutes = (movie.duration % 60)

        return (
            <div>
                <div key={movie.order} className="movie" style={{ backgroundImage: `url(${movie.image})` }}>
                      <div className="movie__cover" onClick={() => setShowResume(true)}>
                        <span className={`movie__cover--rating ${rate}`}>
                          {movie.rating}
                        </span>
                        <div className="movie__cover--content">
                          <span className="movie__cover--title"> {movie.name} ({movie.year}) </span>
                          <p className="movie__cover--details">
                            {renderCathegory()}
                          </p>
                          <p className="movie__cover--details">
                            {`${hour}h ${minutes}min`}
                          </p>
                        </div>
                      </div>
                      {showResume && 
                        <div className="movie__description" onClick={() => setShowResume(false)}>
                          <p className="movie__cover--resume">
                            {movie.resume}
                          </p>
                          <span className="movie__cover--director">
                            Director: {movie.director}
                          </span>
                        </div>
                      }
                    </div>
            </div>
        )

}

export default MovieCard;
