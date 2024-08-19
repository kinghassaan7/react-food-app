import React from 'react'
import pizza from "../assets/pizza.jpg"
import burgur from "../assets/burgur.jpg";
import momo from "../assets/momo.jpg";
import pasta from "../assets/pasta.jpg";
import sandwich from "../assets/sandwich.jpg";
import rissoto from "../assets/rissoto.jpg";
import FoodMenu from './FoodMenu';

const FoodMenuList = () => {

  let foodNames = [
    {
      name: "Pizza",
      image: pizza,
      price: "20",
      ingredients: "Made with souce, chicken and vegetable",
    },
    {
      name: "Burgur",
      image: burgur,
      price: "32",
      ingredients: "Made with souce, chicken and vegetable",
    },
    {
      name: "Momo",
      image: momo,
      price: "25",
      ingredients: "Made with souce, chicken and vegetable",
    },
    {
      name: "Pasta",
      image: pasta,
      price: "28",
      ingredients: "Made with souce, chicken and vegetable",
    },
    {
      name: "Sandwich",
      image: sandwich,
      price: "30",
      ingredients: "Made with souce, chicken and vegetable",
    },
    {
      name: "risotto",
      image: rissoto,
      price: "17",
      ingredients: "Made with souce, chicken and vegetable",
    },
  ];

  return (
    <div>
        <FoodMenu foodNames={foodNames} />
    </div>
  )
}

export default FoodMenuList
