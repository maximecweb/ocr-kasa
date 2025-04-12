import React from "react";
import "./Banner.scss";
import { SlideShow } from "../components/SlideShow";

function Banner(props) {
  if(props.isAbout)
    return <SlideShow />; 
  else
    return (
      <div className="banner">
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    );
}

export default Banner;
