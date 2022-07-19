import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const HomeNav = () => {
  return (
    <div className="homeNav">
      <a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/itenary">
          Trekking
        </Link>
      </a>
      <a>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/heliCharter"
        >
          Helicharter
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/covid">
          Gallery
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
          Contact
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "white" }} to="/blog">
          About
        </Link>
      </a>
    </div>
  );
};

export default HomeNav;
