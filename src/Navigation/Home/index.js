import React from "react";
import "./index.css";
import data from "../../resume.json";
function Home(props, ref) {
  return (
    <>
      <div ref={ref} className="home">
        <div className="home_part1">
          <div className="home_part1--profile">
            <div className="profile--logo"></div>
            <h1 className="profile--heading1">PROFILE</h1>
            <h5 className="profile--heading2">My Personal Info</h5>
          </div>
          <div className="part1_partitionLine"></div>
          <div className="home_part1--summary">
            <div>{data.basics.summary}</div>
          </div>
        </div>
        <div className="home_part2">
          <div className="home_part2--picture">
            <div className="picture--myPic"></div>
            <div className="download_button">
              <a
                className="download_button--text"
                href="https://raw.githubusercontent.com/ShilpiMaurya/resume-app/develop/src/resume.json"
                target={"_blank"}
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="home_part2--info">
            <h3 className="info--heading">Personal Info</h3>
            <p className="info--content">Name: {data.basics.name}</p>
            <hr />
            <p className="info--content">Age: {data.basics.age}</p>
            <hr />

            <p className="info--content">Phone: {data.basics.phone}</p>
            <hr />

            <p className="info--content">Email: {data.basics.email}</p>
            <hr />
            <p className="info--content">
              Github:{" "}
              <a
                className="content--special"
                href={data.basics.profiles.url}
                target={"_blank"}
              >
                {data.basics.profiles.url}
              </a>
            </p>
            <hr />
            <p className="info--content">
              Country: {data.basics.location.country}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.forwardRef(Home);
