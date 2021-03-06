import React from "react";
import "./index.css";
import data from "../../resume.json";
function Intro(props, ref) {
  return (
    <div className="intro" ref={ref}>
      <div className="image" />
      <div className="mask" />
      <div className="text">
        <p className="name">{data.basics.name}</p>
        <p className="work">{data.basics.label}</p>
      </div>
    </div>
  );
}
export default React.forwardRef(Intro);
