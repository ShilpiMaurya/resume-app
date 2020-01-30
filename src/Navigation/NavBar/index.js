import React, { useEffect, useRef, useCallback } from "react";
import "./index.css";
const NavBar = (props, ref) => {
  const navbarRef = useRef();
  const manageScroll = useCallback(
    e => {
      if (e.target.documentElement.scrollTop >= ref.current.offsetHeight) {
        navbarRef.current.classList.add("nav-bar-active");
      } else {
        navbarRef.current.classList.remove("nav-bar-active");
      }
    },
    [ref, navbarRef]
  );

  useEffect(() => {
    document.addEventListener("scroll", manageScroll);
    return () => {
      document.removeEventListener("scroll", manageScroll);
    };
  }, [manageScroll]);
  return (
    <div className="nav-bar" ref={navbarRef}>
      <button
        onClick={() => {
          props.onNavClick("Homekey");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          props.onNavClick("Skillkey");
        }}
      >
        Skills
      </button>
      <button
        onClick={() => {
          props.onNavClick("Educationkey");
        }}
      >
        Education
      </button>
      <button
        onClick={() => {
          props.onNavClick("Contactkey");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          props.onNavClick("Resumekey");
        }}
      >
        Resume
      </button>
    </div>
  );
};
export default React.forwardRef(NavBar);
