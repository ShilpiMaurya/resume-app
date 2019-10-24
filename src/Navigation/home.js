import React from "react";
import "./Home.css";
function Home(props, ref) {
  return (
    <>
      <div ref={ref} className="home">
        <div className="top-1">
          <div className="inside-1">
            <h1 style={{ color: "#FF7632", fontSize: "48px" }}>PROFILE</h1>
            <h5
              style={{
                color: "#D4D4D4",
                fontSize: "18px"
              }}
            >
              My Personal Info
            </h5>
          </div>
          <div className="line"></div>
          <div className="inside-2">
            <p>
              Keenly interested in the universe of front-end development and
              user experience. Aspiring to become a front-end web developer to
              learn, explore and provide great user experience on web-based
              digital products and services.
            </p>
          </div>
        </div>
        <div className="top-2">
          <div className="canvas">
            <div className="inside-3"></div>
            <div className="bob">
              <button className="bob-inside">Download Resume</button>
            </div>
          </div>
          <div className="inside-4">
            <h3
              style={{
                color: "#FF7632",
                fontSize: "20px",
                marginTop: "0px"
              }}
            >
              Personal Info
            </h3>
            <p className="data">Name: Shilpi Maurya</p>
            <hr />
            <p className="data">Age: 24 Years Old</p>
            <hr />

            <p className="data">Phone: +91-9149235516</p>
            <hr />

            <p className="data">Email: meshilpi94@gmail.com</p>
            <hr />
            <p className="data">
              Github:{" "}
              <a
                href={"https://github.com/ShilpiMaurya"}
                target={"_blank"}
                style={{
                  color: "#FF7632"
                }}
              >
                https://github.com/ShilpiMaurya
              </a>
            </p>
            <hr />
            <p className="data">Country: India</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.forwardRef(Home);
