import React from 'react'
import Burgur from "./src/assets/burgur"
import Pizza from "./src/assets/pizza"
import Momo from "./src/assets/momo"
// import ExploreFood from './ExploreFood.jsx'



const ExploreFoodList = () => {

 let foodlist = [
 { name: "Pizza", image: Pizza},
 {name: "Burgur", image: Burgur},
 {name:"Momo", image:Momo}
 ];

  return (
    <div>
      {foodlist.map((item, index) => {
        <div key={index}>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>;
      })}
    </div>
    //  <ExploreFood foodlist={foodlist}/>
  );
}

export default ExploreFoodList
