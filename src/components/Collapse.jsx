import React, { useState } from "react";
import "./Collapse.scss";

export function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  return (
    <div className={"description__panel " + (isContentVisible ? "visible" : "hidden")}>
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={"fa-chevron-up fas " + (isContentVisible ? "visible" : "hidden")}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
