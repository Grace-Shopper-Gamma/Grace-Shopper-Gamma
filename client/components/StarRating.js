import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = props => {
  const [rating, setRating] = useState(props.rating)

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden-radio"
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#468faf' : '#e4e5e9'}
            />
          </label>
        )
      })}
    </>
  )
}

export default StarRating
