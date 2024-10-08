import React from 'react'

const FoodCard = ({title, price, ingredients, image}) => {
  return (
    <div className='food-card-container'>
      <div className="food-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="food-card-details">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{ingredients}</p>
        <button>Order Now</button>
      </div>
    </div>
  )
}

export default FoodCard
