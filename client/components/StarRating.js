import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = props => {
  const [rating, setRating] = useState(props.rating)
  console.log(typeof props.rating)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#444445' : '#e4e5e9'}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
