import React from "react";
import "./Home.css";
function Home(props, ref) {
  return (
    <h1 ref={ref} className="home">
      Home
    </h1>
  );
}
export default React.forwardRef(Home);
