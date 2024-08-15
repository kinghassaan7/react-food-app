import React from "react";
import Burgur from "./burgur.jpg";
// import image2 from "./assets/image2.jpg";
// import image3 from "./assets/image3.jpg";

const FlexBox = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <img src={Burgur} alt="Image 1" className="gallery-image" />
        <div className="gallery-text">Image 1 Description</div>
      </div>
      <div className="gallery-item">
        <img src={Burgur} alt="Image 2" className="gallery-image" />
        <div className="gallery-text">Image 2 Description</div>
      </div>
      <div className="gallery-item">
        <img src={Burgur} alt="Image 3" className="gallery-image" />
        <div className="gallery-text">Image 3 Description</div>
      </div>
    </div>
  );
};

export default FlexBox;
