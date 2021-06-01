import React from "react";
import DropdownPage from "./DropdownPage";

export default function Article(props) {
  const { image } = props;  
  return (
    <div class="card-container">
      <div className="image-container">
        <img
          src={image.thumbnail}
          alt= {image.title}
        />
      </div>
      <div className="card-content">
      <div class="card-title">{image.title}</div>
     <DropdownPage id={image.title}/>
      <p><b>Description:</b>{image.description}</p> 
      </div> 
    </div>
  );
}

