import React from "react";

const ExploreFood = ({foodlist}) => {
  return (
    <div className="explore-foods">
      <h1>Explore Food</h1>
      <div className="card-container">
        {foodlist.map((food, index) => (
          <div key={index} className="explore-food-card">
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFood;
