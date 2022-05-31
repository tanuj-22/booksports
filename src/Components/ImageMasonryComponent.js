import React from "react";
import img1 from "../assests/masonryGrid/33.webp";
import img2 from "../assests/masonryGrid/34.webp";
import img3 from "../assests/masonryGrid/35.webp";
import img4 from "../assests/masonryGrid/36.webp";
import img5 from "../assests/masonryGrid/37.webp";
import img6 from "../assests/masonryGrid/39.webp";
import img7 from "../assests/masonryGrid/41.webp";
import "../css/ImageMasonryComponent.css";

const ImageMasonryComponent = () => {
  return (
    <>
      <div className="masonry-container">
        <div className="masonry-column-container-1">
          {[img1, img3, img5].map((img, index) => {
            return <img src={img} key={index} alt={"img" + index} />;
          })}
        </div>
        <div className="masonry-column-container-2">
          {[img6, img2, img4, img7].map((img, index) => {
            return <img src={img} key={index} alt={"img" + index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ImageMasonryComponent;
