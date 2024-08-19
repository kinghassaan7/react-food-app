import React from 'react';
import burgur from "../assets/burgur.jpg";
import pizza from "../assets/pizza.jpg";
import momo from "../assets/momo.jpg";
import ExploreFood from './ExploreFood';

const ExploreFoodList = () => {
  let foodlist = [
    { name: "Pizza", image: pizza },
    { name: "Burgur", image: burgur },
    { name: "Momo", image: momo }
  ];

  return (
    <ExploreFood foodlist={foodlist} />
  );
}

export default ExploreFoodList;
